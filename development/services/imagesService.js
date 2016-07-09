angular.module('yente')
.service('imagesService', function ($http) {

  this.storeImage = function (projectTitle, projectUrl, projectDescription, imageData, fileName) {
    var imageExtension = imageData.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];
		var data = {
	    newProject: {
				title: projectTitle,
				url: projectUrl,
				description: projectDescription,
				image: {
					imageName: fileName,
		      imageBody: imageData,
		      imageExtension: imageExtension,
		      userEmail: 'obama@usa.gov'
				}
			}
    };

    return $http.post('/api/images/newimage', newImage);
  };
});
