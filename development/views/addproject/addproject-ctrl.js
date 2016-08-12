angular.module('yente')
	.controller('AddProjectController', function($scope, $state, projectsService, authService, usersService, getUserForAddProject, $timeout) {
		var vm = this;
		var picInfo = {};
		if(getUserForAddProject) {
			vm.user = getUserForAddProject;
		} else {
			$state.go('home');
		}

		vm.projectPicture = function(fileread, fileName) {
			picInfo = {
				fileread: fileread,
				fileName: fileName
			};
		};

		vm.submitProject = function(projectTitle, projectUrl, projectDescription) {
			projectUrl = 'http://' + projectUrl;
			var user = vm.user;
			projectsService.storeImage(user, projectTitle, projectUrl, projectDescription, picInfo.fileread, picInfo.fileName)
				.then(function(result) {
					$state.go('project', {id: result._id});
				});
		};

	});
