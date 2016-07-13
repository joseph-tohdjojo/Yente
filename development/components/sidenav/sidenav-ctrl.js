angular.module('yente')
	.controller('SideNavController', function($scope, $state, authService, usersService, $stateParams, projectsService) {
		var sideNavCtrl = this;

		authService.getCurrentUser()
			.then(function(response) {
				sideNavCtrl.user = response;
			});

		sideNavCtrl.login = function(loginUsername, loginPassword) {
			if(loginUsername && loginPassword) {
				var user = {
					username: loginUsername,
					password: loginPassword
				};
				authService.login(user)
					.then(function(response) {
						sideNavCtrl.user = response.data;
						if($state.includes('apply')) {
							$state.go('home');
						}
					});
				sideNavCtrl.loginUsername = '';
				sideNavCtrl.loginPassword = '';
			}
		};

		sideNavCtrl.logout = function() {
			authService.logout()
				.then(function(response) {
					if(response.status === 200) {
						sideNavCtrl.user = false;
						$state.go('home');
					} else {
						alert('Failed to log out.');
					}
				});
		};

		sideNavCtrl.slideLoginMenu = function() {
			$('.login-form').slideToggle('fast');
		};

		sideNavCtrl.slideUserMenu = function() {
			$('.user-menu').slideToggle('fast');
		};

		$scope.$on('$stateChangeSuccess', function() {
			authService.getCurrentUser()
				.then(function(response) {
					sideNavCtrl.user = response;
				});

			if(!$state.includes('project')) {
				$('.project-info').slideUp('fast');
			} else {
				projectsService.getProject($stateParams.id)
					.then(function(results) {
						if(results.status === 200) {
							sideNavCtrl.projUrl = results.data.projectUrl;
							sideNavCtrl.projTitle = results.data.title;
							sideNavCtrl.projDesc = results.data.description;
						}
					});
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
