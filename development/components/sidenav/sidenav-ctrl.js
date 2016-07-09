angular.module('yente')
	.controller('SideNavController', function($scope, $state, usersService) {
		var sideNavCtrl = this;
		function reset() {
			$('.login-form').slideUp('fast');
			$('.user-menu').slideUp('fast');
		}

		usersService.checkForSession()
			.then(function(response) {
				if(response) {
					sideNavCtrl.user = response;
				}
				else {
					sideNavCtrl.user = false;
				}
			});



		sideNavCtrl.login = function(loginUsername, loginPassword) {
			usersService.login(loginUsername, loginPassword)
				.then(function(user) {
					sideNavCtrl.user = user;
				});
		};

		$('.login').on('click', function() {
			$('.login-form').slideToggle('fast');
		});

		$('.username').on('click', function() {
			$('.user-menu').slideToggle('fast');
		});

		$scope.$on('$stateChangeSuccess', function() {
			if(!$state.includes('project')) {
				$('.project-info').slideUp('fast');
			} else {
				$('.project-info').slideDown('fast');
			}

			if($state.includes('settings') || $state.includes('addproject')) {
				$('.user-menu').slideDown('fast');
			} else {
				$('.user-menu').slideUp('fast');
			}

			$('.login-form').slideUp('fast');
		});


	});
