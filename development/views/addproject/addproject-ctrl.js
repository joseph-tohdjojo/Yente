angular.module('yente')
	.controller('addprojectCtrl', function($scope, Upload, $timeout, imagesService) {
		var picInfo = {};

		$scope.projectPicture = function(fileread, fileName) {
			picInfo = {
				fileread: fileread,
				fileName: fileName
			};
			if(picInfo.fileread) {
				$scope.active = true;
			}

		};

		$scope.postProject = function() {
			imagesService.storeImage(projectTitle, projectUrl, projectDescription, picInfo.fileread, picInfo.fileName)
				.then(function(result) {
					scope.images.unshift(result.data);
				});
		};

		$scope.upload = function (dataUrl, name) {
      Upload.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: {
          file: Upload.dataUrltoBlob(dataUrl, name)
        },
      }).then(function (response) {
        $timeout(function () {
          $scope.result = response.data;
        });
      },
			function (response) {
        if (response.status > 0) {
					$scope.errorMsg = response.status + ': ' + response.data;
				}
      },
			function (evt) {
        $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
      });
    };

	});
