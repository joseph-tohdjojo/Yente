angular.module('yente', ['ui.router', 'masonry'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home/home-tmpl.html',
				controller: 'HomeController',
				controllerAs: 'homeCtrl'
			})
			.state('talents', {
				url:'/talents',
				templateUrl: 'views/talents/talents-tmpl.html',
				controller: 'TalentsController',
				controllerAs: 'talentsCtrl'
			})
			.state('project', {
				url: '/project/:id',
				templateUrl: 'views/project/project-tmpl.html',
				controller: 'ProjectController',
				controllerAs: 'projectCtrl',
				resolve: {
					projectInfo: function($http, $stateParams) {
						return $http.get('/api/project/getproject/' + $stateParams.id)
							.then(function(success) {
									return success;
								},
								function(error) {
									return error;
								});
				  }
				}
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile/profile-tmpl.html'
			})
			.state('apply', {
				url: '/apply',
				templateUrl: 'views/apply/apply-tmpl.html',
				controller: 'ApplyController',
				controllerAs: 'applyCtrl',
				resolve: {
					getUserForApplication: function($http) {
				    return $http({
				      method: 'GET',
				      url: '/api/user/getme'
				    }).then(function(response) {
				      return response.data;
				    });
				  }
				}
			})
			.state('settings', {
				url: '/settings',
				templateUrl: 'views/settings/settings-tmpl.html'
			})
			.state('addproject', {
				url: '/addproject',
				templateUrl: 'views/addproject/addproject-tmpl.html',
				controller: 'AddProjectController',
				controllerAs: 'addProjectCtrl',
				resolve: {
					getUserForAddProject: function($http) {
				    return $http({
				      method: 'GET',
				      url: '/api/user/getme'
				    }).then(function(response) {
				      return response.data;
				    });
				  }
				}
			});

	});
