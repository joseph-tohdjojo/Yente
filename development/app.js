angular.module('yente', ['ui.router', 'infinite-scroll'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home/home-tmpl.html'
			})
			.state('talents', {
				url:'/talents',
				templateUrl: 'views/talents/talents-tmpl.html'
			})
			.state('project', {
				url: '/project',
				templateUrl: 'views/project/project-tmpl.html'
			})
			.state('apply', {
				url: '/apply',
				templateUrl: 'views/apply/apply-tmpl.html'
			});

	});
