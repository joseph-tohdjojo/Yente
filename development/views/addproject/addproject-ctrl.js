angular.module('yente')
	.controller('AddProjectController', function($scope, $state, projectsService, authService, usersService, getUserForAddProject, $timeout) {
		var addProjectCtrl = this;
		var picInfo = {};
		if(getUserForAddProject) {
			addProjectCtrl.user = getUserForAddProject;
		} else {
			$state.go('home');
		}

		addProjectCtrl.projectPicture = function(fileread, fileName) {
			picInfo = {
				fileread: fileread,
				fileName: fileName
			};
		};

		addProjectCtrl.submitProject = function(projectTitle, projectUrl, projectDescription) {
			projectUrl = 'http://' + projectUrl;
			var user = addProjectCtrl.user;
			projectsService.storeImage(user, projectTitle, projectUrl, projectDescription, picInfo.fileread, picInfo.fileName)
				.then(function(result) {
					$state.go('project', {id: result._id});
				});
		};

	});
