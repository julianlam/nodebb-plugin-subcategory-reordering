'use strict';
/* globals $, app, socket */

define('admin/plugins/subcategory-reordering', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('subcategory-reordering', $('.subcategory-reordering-settings'));

		$('#save').on('click', function() {
			Settings.save('subcategory-reordering', $('.subcategory-reordering-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'subcategory-reordering-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});