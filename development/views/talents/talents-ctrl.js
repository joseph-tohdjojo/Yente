angular.module('yente')
	.controller('talentsController', function($scope, usersService) {

		var thisCtrl = this;

		usersService.getUsers()
			.then(function(resp) {
				thisCtrl.users = resp;
			});

		thisCtrl.hello = 'hello';

	});
