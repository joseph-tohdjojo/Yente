angular.module('yente')
	.controller('projectGridController', function($scope, $state, $rootScope) {
		$scope.goToProject = function(_id) {
			$state.go('project');
			$rootScope.$broadcast('projectClicked', 'you got it!');
		};

		$scope.projects = [
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/99KQ3JCV8X.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Q8XPB4BHSZ.jpg',
				creator: {
					name: {
						first: 'James',
						last: 'Putnam'
					}
				}
			},
			{
				projectImageUrl: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F88WOX4EU4.jpg',
				creator: {
					name: {
						first: 'Jared',
						last: 'Peterson'
					}
				}
			}
		];

	});
