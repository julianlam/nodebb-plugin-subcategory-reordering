'use strict';

var async = module.parent.parent.require('async');

var categories = module.parent.parent.require('./categories'),
	db = module.parent.parent.require('./database');

var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	async.waterfall([
		async.apply(db.getSortedSetRange, 'categories:cid', 0, -1),
		async.apply(categories.getCategoriesData)
	], function(err, categories) {
		res.render('admin/plugins/subcategory-reordering', {
			categories: categories
		});
	});
};

module.exports = Controllers;