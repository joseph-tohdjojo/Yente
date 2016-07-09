angular.module('yente')
		.component('userCard', {
			templateUrl: './components/usercard/usercard-tmpl.html',
			controller: 'userCardController',
			controllerAs: 'vm',
			bindings: { user: '<' }
		});
