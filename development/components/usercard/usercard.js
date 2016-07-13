angular.module('yente')
		.directive('userCard', function() {
			return {
				restrict: 'E',
				templateUrl: './components/usercard/usercard-tmpl.html',
				scope: false,
				controller: 'UserCardController',
				controllerAs: 'userCardCtrl'
			}
		});
