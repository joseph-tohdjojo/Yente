angular.module('yente', ['ui.router', 'ngFileUpload', 'ngImgCrop']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home/home-tmpl.html'
	}).state('talents', {
		url: '/talents',
		templateUrl: 'views/talents/talents-tmpl.html',
		controller: 'talentsController as talentsCtrl'
	}).state('project', {
		url: '/project',
		templateUrl: 'views/project/project-tmpl.html'
	}).state('profile', {
		url: '/profile',
		templateUrl: 'views/profile/profile-tmpl.html'
	}).state('apply', {
		url: '/apply',
		templateUrl: 'views/apply/apply-tmpl.html'
	}).state('settings', {
		url: '/settings',
		templateUrl: 'views/settings/settings-tmpl.html'
	}).state('addproject', {
		url: '/addproject',
		templateUrl: 'views/addproject/addproject-tmpl.html',
		controller: 'addprojectCtrl'
	});
});
angular.module('yente').controller('MainController', function ($scope, usersService) {
	// var mainCtrl = this;
	//
	// var userAvailable = usersService.checkForSession();
	//
	// if(userAvailable) {
	// 	mainCtrl.user = userAvailable;
	// }

});
angular.module('yente').service('imagesService', function ($http) {

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
angular.module('yente').service('projectService', function ($http) {});
angular.module('yente').service('usersService', function ($http, $state) {
	var user = false;

	this.checkForSession = function () {
		return $http({
			method: 'GET',
			url: '/api/user/currentuser'
		}).then(function (response) {
			return response.data;
		});
	};

	this.login = function (loginUsername, loginPassword) {
		var credentials = {
			username: loginUsername,
			password: loginPassword
		};
		return $http({
			method: 'POST',
			url: '/api/user/login',
			data: credentials
		}).then(function (success) {
			user = success.data;
			return user;
		}, function (error) {
			$state.go('apply');
			return error.data;
		});
	};
});
angular.module('yente').controller('projectGridController', function ($scope, $state, $rootScope) {
	$scope.goToProject = function (_id) {
		$state.go('project');
		$rootScope.$broadcast('projectClicked', 'you got it!');
	};

	$scope.projects = [{
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
		creator: {
			name: {
				first: 'James',
				last: 'Putnam'
			}
		}
	}, {
		projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
		creator: {
			name: {
				first: 'Jared',
				last: 'Peterson'
			}
		}
	}];
});
angular.module('yente').component('projectGrid', {
	templateUrl: './components/projectgrid/projectgrid-tmpl.html',
	controller: 'projectGridController'
});
angular.module('yente').controller('SideNavController', function ($scope, $state, usersService) {
	var sideNavCtrl = this;
	function reset() {
		$('.login-form').slideUp('fast');
		$('.user-menu').slideUp('fast');
	}

	usersService.checkForSession().then(function (response) {
		if (response) {
			sideNavCtrl.user = response;
		} else {
			sideNavCtrl.user = false;
		}
	});

	sideNavCtrl.login = function (loginUsername, loginPassword) {
		usersService.login(loginUsername, loginPassword).then(function (user) {
			sideNavCtrl.user = user;
		});
	};

	$('.login').on('click', function () {
		$('.login-form').slideToggle('fast');
	});

	$('.username').on('click', function () {
		$('.user-menu').slideToggle('fast');
	});

	$scope.$on('$stateChangeSuccess', function () {
		if (!$state.includes('project')) {
			$('.project-info').slideUp('fast');
		} else {
			$('.project-info').slideDown('fast');
		}

		if ($state.includes('settings') || $state.includes('addproject')) {
			$('.user-menu').slideDown('fast');
		} else {
			$('.user-menu').slideUp('fast');
		}

		$('.login-form').slideUp('fast');
	});
});
angular.module('yente').component('sideNav', {
	templateUrl: './components/sidenav/sidenav-tmpl.html',
	controller: 'SideNavController',
	controllerAs: 'sideNavCtrl'
});
angular.module('yente').controller('userCardController', function ($scope) {});
angular.module('yente').component('userCard', {
	templateUrl: './components/usercard/usercard-tmpl.html',
	controller: 'userCardController',
	controllerAs: 'vm',
	bindings: { user: '<' }
});
angular.module('yente').directive('fileread', function (imagesService) {
	return {
		restrict: 'A',
		scope: { projectPicture: '&' },
		link: function (scope, elem, attrs) {
			elem.bind("change", function (changeEvent) {
				console.log(elem.context);

				var reader = new FileReader();
				reader.onload = function (loadEvent) {
					var fileread = loadEvent.target.result;
					var tempArray = elem[0].value.split('\\');
					var fileName = tempArray[tempArray.length - 1];
					var obj = {
						fileread: fileread,
						fileName: fileName
					};
					projectPicture(obj);
				};

				reader.readAsDataURL(changeEvent.target.files[0]);
			});
		}
	};
});
angular.module('yente').controller('addprojectCtrl', function ($scope, Upload, $timeout, imagesService) {
	var picInfo = {};

	$scope.projectPicture = function (fileread, fileName) {
		picInfo = {
			fileread: fileread,
			fileName: fileName
		};
		if (picInfo.fileread) {
			$scope.active = true;
		}
	};

	$scope.postProject = function () {
		imagesService.storeImage(projectTitle, projectUrl, projectDescription, picInfo.fileread, picInfo.fileName).then(function (result) {
			scope.images.unshift(result.data);
		});
	};

	$scope.upload = function (dataUrl, name) {
		Upload.upload({
			url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
			data: {
				file: Upload.dataUrltoBlob(dataUrl, name)
			}
		}).then(function (response) {
			$timeout(function () {
				$scope.result = response.data;
			});
		}, function (response) {
			if (response.status > 0) {
				$scope.errorMsg = response.status + ': ' + response.data;
			}
		}, function (evt) {
			$scope.progress = parseInt(100.0 * evt.loaded / evt.total);
		});
	};
});
angular.module('yente').controller('talentsController', function ($scope, usersService) {

	var thisCtrl = this;

	usersService.getUsers().then(function (resp) {
		thisCtrl.users = resp;
	});

	thisCtrl.hello = 'hello';
});