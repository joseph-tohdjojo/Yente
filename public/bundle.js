angular.module('yente', ['ui.router', 'wu.masonry']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home/home-tmpl.html',
		controller: 'HomeController',
		controllerAs: 'homeCtrl'
	}).state('talents', {
		url: '/talents',
		templateUrl: 'views/talents/talents-tmpl.html',
		controller: 'TalentsController',
		controllerAs: 'talentsCtrl'
	}).state('project', {
		url: '/project/:id',
		templateUrl: 'views/project/project-tmpl.html',
		controller: 'ProjectController',
		controllerAs: 'projectCtrl',
		resolve: {
			projectInfo: function ($http, $stateParams) {
				return $http.get('/api/project/getproject/' + $stateParams.id).then(function (success) {
					return success;
				}, function (error) {
					return error;
				});
			}
		}
	}).state('profile', {
		url: '/profile',
		templateUrl: 'views/profile/profile-tmpl.html'
	}).state('apply', {
		url: '/apply',
		templateUrl: 'views/apply/apply-tmpl.html',
		controller: 'ApplyController',
		controllerAs: 'applyCtrl',
		resolve: {
			getUserForApplication: function ($http) {
				return $http({
					method: 'GET',
					url: '/api/user/getme'
				}).then(function (response) {
					return response.data;
				});
			}
		}
	}).state('settings', {
		url: '/settings',
		templateUrl: 'views/settings/settings-tmpl.html'
	}).state('addproject', {
		url: '/addproject',
		templateUrl: 'views/addproject/addproject-tmpl.html',
		controller: 'AddProjectController',
		controllerAs: 'addProjectCtrl',
		resolve: {
			getUserForAddProject: function ($http) {
				return $http({
					method: 'GET',
					url: '/api/user/getme'
				}).then(function (response) {
					return response.data;
				});
			}
		}
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
angular.module("yente").service("authService", function ($http) {

	this.login = function (user) {
		return $http({
			method: 'post',
			url: '/api/user/login',
			data: user
		}).then(function (response) {
			return response;
		});
	};

	this.logout = function () {
		return $http({
			method: 'get',
			url: '/api/user/logout'
		}).then(function (success) {
			return success;
		}, function (error) {
			alert('Wrong credentials');
		});
	};

	this.getCurrentUser = function () {
		return $http({
			method: 'GET',
			url: '/api/user/getme'
		}).then(function (response) {
			return response.data;
		});
	};

	this.registerUser = function (user) {
		return $http({
			method: 'POST',
			url: '/api/user/register',
			data: user
		}).then(function (response) {
			return response.data;
		});
	};

	this.editUser = function (id, user) {
		return $http({
			method: 'PUT',
			url: "/api/user/" + id,
			data: user
		}).then(function (response) {
			return response;
		});
	};
});
angular.module('yente').service('imagesService', function ($http) {});
angular.module('yente').service('projectsService', function ($http) {
	var projectsService = this;

	projectsService.getProject = function (id) {
		return $http.get('/api/project/getproject/' + id).then(function (success) {
			return success;
		}, function (error) {
			return error;
		});
	};

	projectsService.getAllProjects = function () {
		return $http.get('/api/project/getprojects').then(function (response) {
			return response.data;
		});
	};

	projectsService.getProjectsByOwner = function (ownerId) {
		return $http.get('/api/project/getprojects/' + ownerId).then(function (response) {
			return response.data;
		});
	};

	projectsService.getSomeProjectsByOwner = function (ownerId) {
		return $http.get('/api/project/getsomeprojects/' + ownerId).then(function (response) {
			return response.data;
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

		return $http.post('/api/project/addproject', newProject).then(function (response) {
			return response.data;
		});
	};
});
angular.module("yente").service("usersService", function ($http, projectsService) {

	this.getAllUsers = function () {
		return $http({
			method: 'GET',
			url: '/api/users'
		}).then(function (response) {

			for (var i = 0; i < response.data.length; i++) {
				var id = response.data[i]._id;

				(function (iter) {
					projectsService.getProjectsByOwner(id).then(function (results) {
						response.data[iter].projects = results;
					});
				})(i);
			}
			return response.data;
		});
	};

	this.getUser = function (id) {
		return $http({
			method: 'GET',
			url: '/user?_id=' + id
		}).then(function (response) {
			return response;
		});
	};

	// Not Needed
	//
	// this.deleteUser = function(id) {
	//   return $http({
	//     method: 'DELETE',
	//     url: '/user/' + id
	//   }).then(function(response) {
	//     return response;
	//   });
	// };
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
angular.module('yente').directive('fileread', function (imagesService) {
					return {
										restrict: 'A',
										scope: { projectPicture: '&' },
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
angular.module('yente').controller('SideNavController', function ($scope, $state, authService, usersService, $stateParams, projectsService) {
	var sideNavCtrl = this;

	authService.getCurrentUser().then(function (response) {
		sideNavCtrl.user = response;
	});

	sideNavCtrl.login = function (loginUsername, loginPassword) {
		if (loginUsername && loginPassword) {
			var user = {
				username: loginUsername,
				password: loginPassword
			};
			authService.login(user).then(function (response) {
				sideNavCtrl.user = response.data;
				if ($state.includes('apply')) {
					$state.go('home');
				}
			});
			sideNavCtrl.loginUsername = '';
			sideNavCtrl.loginPassword = '';
		}
	};

	sideNavCtrl.logout = function () {
		authService.logout().then(function (response) {
			if (response.status === 200) {
				sideNavCtrl.user = false;
				$state.go('home');
			} else {
				alert('Failed to log out.');
			}
		});
	};

	sideNavCtrl.slideLoginMenu = function () {
		$('.login-form').slideToggle('fast');
	};

	sideNavCtrl.slideUserMenu = function () {
		$('.user-menu').slideToggle('fast');
	};

	$scope.$on('$stateChangeSuccess', function () {
		authService.getCurrentUser().then(function (response) {
			sideNavCtrl.user = response;
		});

		if (!$state.includes('project')) {
			$('.project-info').slideUp('fast');
		} else {
			projectsService.getProject($stateParams.id).then(function (results) {
				if (results.status === 200) {
					sideNavCtrl.projUrl = results.data.projectUrl;
					sideNavCtrl.projTitle = results.data.title;
					sideNavCtrl.projDesc = results.data.description;
				}
			});
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
angular.module('yente').controller('UserCardController', function ($scope) {});
angular.module('yente').directive('userCard', function () {
	return {
		restrict: 'E',
		templateUrl: './components/usercard/usercard-tmpl.html',
		scope: false,
		controller: 'UserCardController',
		controllerAs: 'userCardCtrl'
	};
});
angular.module('yente').controller('ApplyController', function ($scope, $state, authService, getUserForApplication) {
	var applyCtrl = this;

	if (getUserForApplication) {
		$state.go('home');
	}

	applyCtrl.register = function (username, password, firstName, lastName, email, city, state, bio) {
		var user = {
			firstName: firstName,
			lastName: lastName,
			bio: bio,
			username: username,
			password: password,
			email: email,
			city: city,
			state: state.toUpperCase()
		};
		authService.registerUser(user).then(function (results) {
			applyCtrl.user = results;
			$state.go('home');
		});
	};
});
angular.module('yente').controller('AddProjectController', function ($scope, $state, projectsService, authService, usersService, getUserForAddProject, $timeout) {
	var vm = this;
	var picInfo = {};
	if (getUserForAddProject) {
		vm.user = getUserForAddProject;
	} else {
		$state.go('home');
	}

	vm.projectPicture = function (fileread, fileName) {
		picInfo = {
			fileread: fileread,
			fileName: fileName
		};
	};

	vm.submitProject = function (projectTitle, projectUrl, projectDescription) {
		projectUrl = 'http://' + projectUrl;
		var user = vm.user;
		projectsService.storeImage(user, projectTitle, projectUrl, projectDescription, picInfo.fileread, picInfo.fileName).then(function (result) {
			$state.go('project', { id: result._id });
		});
	};
});
angular.module('yente').controller('HomeController', function ($scope, projectsService) {

	function shuffle(array) {
		var currentIndex = array.length,
		    temporaryValue,
		    randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	var homeCtrl = this;

	projectsService.getAllProjects().then(function (results) {
		results = shuffle(results);
		homeCtrl.projects = results;
	});
});
angular.module('yente').controller('ProjectController', function ($scope, $sce, $stateParams, $state, projectInfo, projectsService) {
	var projectCtrl = this;

	if (projectInfo.data.accepted) {
		projectCtrl.underReview = false;
	} else {
		projectCtrl.underReview = true;
	}

	if (projectInfo.status === 200) {
		projectCtrl.projUrl = '';
		projectCtrl.projInfo = projectInfo.data;
		projectsService.getProjectsByOwner(projectInfo.data.creator._id).then(function (results) {
			projectCtrl.otherProjects = results;
		});
	} else {}
});
angular.module('yente').controller('TalentsController', function ($scope, usersService) {

	var talentsCtrl = this;

	usersService.getAllUsers().then(function (response) {
		talentsCtrl.users = response;
	});
});