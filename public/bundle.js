angular.module('yente', ['ui.router', 'infinite-scroll']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home/home-tmpl.html'
	}).state('talents', {
		url: '/talents',
		templateUrl: 'views/talents/talents-tmpl.html'
	}).state('project', {
		url: '/project',
		templateUrl: 'views/project/project-tmpl.html'
	}).state('apply', {
		url: '/apply',
		templateUrl: 'views/apply/apply-tmpl.html'
	});
});
angular.module('yente').service('projectService', function ($http) {});
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
angular.module('yente').controller('sideNavController', function ($scope, $state) {

	$('.login').on('click', function () {
		$('.login-form').slideToggle('fast');
	});

	$scope.$on('$stateChangeSuccess', function () {
		if (!$state.includes('project')) {
			$('.project-info').slideUp('fast');
		} else {
			$('.project-info').slideDown('fast');
		}
	});
});
angular.module('yente').component('sideNav', {
	templateUrl: './components/sidenav/sidenav-tmpl.html',
	controller: 'sideNavController'
});
angular.module('yente').controller('userCardController', function () {});
angular.module('yente').component('userCard', {
	templateUrl: './components/usercard/usercard-tmpl.html',
	controller: 'userCardController'
});