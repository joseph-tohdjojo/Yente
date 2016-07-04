angular.module('yente')
	.controller('sideNavController', function($scope, $state) {

		$('.login').on('click', function() {
			$('.login-form').slideToggle('fast');
		});

		$scope.$on('$stateChangeSuccess', function() {
			if(!$state.includes('project')) {
				$('.project-info').slideUp('fast');
			} else {
				$('.project-info').slideDown('fast');
			}
		});
	});
