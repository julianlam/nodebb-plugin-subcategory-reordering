"use strict";

var controllers = require('./lib/controllers');

var meta = module.parent.require('./meta'),
	db = module.parent.require('./database'),
	categories = module.parent.require('./categories'),
	winston = module.parent.require('winston'),
	_ = require('underscore');

var plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/subcategory-reordering', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/subcategory-reordering', controllers.renderAdminPage);

	plugin.reloadSettings();
	callback();
};

plugin.reloadSettings = function(data) {
	if (!data || data.plugin === 'subcategory-reordering') {
		meta.settings.get('subcategory-reordering', function(err, settings) {
			plugin._settings = _.extend(plugin._settings || {}, settings);
			winston.verbose('[plugins/subcategory-reordering] Settings reloaded.');
		});
	}
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/subcategory-reordering',
		icon: 'fa-sort-numeric-asc',
		name: 'Subcategory Reordering'
	});

	callback(null, header);
};

plugin.onNewTopicOrReply = function(data) {
	categories.getCategoryField(data.cid, 'parentCid', function(err, parentCid) {
		console.log(data.cid, parentCid);
		if (parseInt(parentCid, 10) !== 0 && plugin._settings['cid:' + parentCid + ':enabled'] === 'on') {
			floatToTop(data.cid, parentCid);
		}
	});
};

function floatToTop(cid, parentCid) {
	db.sortedSetAdd('cid:' + parentCid + ':children', -Date.now(), cid, function(err) {
		if (!err) {
			winston.verbose('[plugins/subcategory-reordering] Floating cid ' + cid + ' to the top of cid ' + parentCid + '.');
		} else {
			winston.error(err.message);
		}
	});
}

module.exports = plugin;