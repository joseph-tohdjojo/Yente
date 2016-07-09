angular.module('yente')
	.service('usersService', function($http, $state) {
		var user = false;

		this.checkForSession = function() {
			return $http({
				method: 'GET',
				url: '/api/user/currentuser',
			}).then(function(response) {
				return response.data;
			});
		};

		this.login = function(loginUsername, loginPassword) {
			var credentials = {
				username: loginUsername,
				password: loginPassword
			};
			return $http({
				method: 'POST',
				url: '/api/user/login',
				data: credentials
			}).then(
				function(success) {
					user = success.data;
					return user;
				},
				function(error) {
					$state.go('apply');
					return error.data;
				}
			);
		};

	});
