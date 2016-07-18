angular.module("yente")
	.service("usersService", function($http, projectsService) {

	  this.getAllUsers = function() {
	    return $http({
	      method: 'GET',
	      url: '/api/users'
	    }).then(function(response) {

				for (var i = 0; i < response.data.length; i++) {
					var id = response.data[i]._id;

					(function(iter){
						projectsService.getProjectsByOwner(id)
							.then(function(results) {
								response.data[iter].projects = results;
							})
					})(i)
				}
				return response.data;
	    });
	  };

	  this.getUser = function(id) {
	    return $http({
	      method: 'GET',
	      url: '/user?_id=' + id
	    }).then(function(response) {
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
