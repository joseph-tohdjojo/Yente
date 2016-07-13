angular.module('yente')
	.controller('ProjectController', function($scope, $sce, $stateParams, $state, projectInfo, projectsService) {
		var projectCtrl = this;

		if(projectInfo.status === 200) {
			projectCtrl.projUrl = '';
			projectCtrl.projInfo = projectInfo.data;
			projectsService.getProjectsByOwner(projectInfo.data.creator._id)
				.then(function(results) {
					projectCtrl.otherProjects = results;
				});

		} else {
			$state.go('home');
		}

	});
