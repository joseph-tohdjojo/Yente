angular.module('yente')
	.controller('ApplyController', function($scope, $state, authService, getUserForApplication) {
		var applyCtrl = this;

		if(getUserForApplication) {
			$state.go('home');
		}

		applyCtrl.register = function(username, password, firstName, lastName, email, city, state, bio) {
			var user = {
				firstName: firstName,
				lastName: lastName,
				bio: bio,
				username: username,
				password: password,
				email: email,
				city: city,
				state: state.toUpperCase()
			};
			authService.registerUser(user)
				.then(function(results) {
					applyCtrl.user = results;
					$state.go('home');
				});
		};
	});
