angular.module('yente')
	.controller('TalentsController', function($scope, usersService) {

		var talentsCtrl = this;

		usersService.getAllUsers()
			.then(function(response) {
				talentsCtrl.users = response;
			});

	});
