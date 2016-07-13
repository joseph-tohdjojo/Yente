angular.module('yente')
	.directive('fileread', function (imagesService) {
	  return {
	    restrict: 'A',
			scope: {projectPicture: '&'},
	    link: function (scope, elem, attrs) {
	      elem.bind("change", function (changeEvent) {
	        var reader = new FileReader();
	        reader.onload = function (loadEvent) {
						$('.preview').hide();
						$('.preview').attr('src', loadEvent.target.result);
						$('.preview').slideDown('fast');
	          var fileread = loadEvent.target.result;
						var tempArray = elem[0].value.split('\\');
            var fileName = tempArray[tempArray.length - 1];
						var obj = {
							fileread: fileread,
							fileName: fileName
						};
						scope.projectPicture(obj);
	        };

	        reader.readAsDataURL(changeEvent.target.files[0]);
	      });
	    }
	  };
	});
