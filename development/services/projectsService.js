angular.module('yente')
	.service('projectsService', function($http) {
		var projectsService = this;

		projectsService.getProject = function(id) {
			return $http.get('/api/project/getproject/' + id)
				.then(function(success) {
						return success;
					},
					function(error) {
						return error;
					});
		};

		projectsService.getAllProjects = function() {
			return $http.get('/api/project/getprojects')
				.then(function(response) {
					return response.data;
				});
		};

		projectsService.getProjectsByOwner = function(ownerId) {
			return $http.get('/api/project/getprojects/' + ownerId)
				.then(function(response) {
					return response.data
				});
		};

		projectsService.storeImage = function (user, projectTitle, projectUrl, projectDescription, imageData, fileName) {
			var imageExtension = imageData.split(';')[0].split('/');
	    imageExtension = imageExtension[imageExtension.length - 1];

			var newProject = {
				title: projectTitle,
				description: projectDescription,
				projectUrl: projectUrl,
				creator: user._id,
				image: {
					imageName: fileName,
		      imageBody: imageData,
		      imageExtension: imageExtension,
		      userEmail: user.email
				}
			};

	    return $http.post('/api/project/addproject', newProject)
				.then(function(response) {
					return response.data;
				});
	  };

	});
