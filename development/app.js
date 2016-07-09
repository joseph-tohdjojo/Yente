angular.module('yente', ['ui.router', 'ngFileUpload', 'ngImgCrop'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home/home-tmpl.html'
			})
			.state('talents', {
				url:'/talents',
				templateUrl: 'views/talents/talents-tmpl.html',
				controller: 'talentsController as talentsCtrl'
			})
			.state('project', {
				url: '/project',
				templateUrl: 'views/project/project-tmpl.html'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile/profile-tmpl.html'
			})
			.state('apply', {
				url: '/apply',
				templateUrl: 'views/apply/apply-tmpl.html'
			})
			.state('settings', {
				url: '/settings',
				templateUrl: 'views/settings/settings-tmpl.html'
			})
			.state('addproject', {
				url: '/addproject',
				templateUrl: 'views/addproject/addproject-tmpl.html',
				controller: 'addprojectCtrl'
			});

	});
