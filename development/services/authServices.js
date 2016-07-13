angular.module("yente")
	.service("authService", function($http) {

	  this.login = function(user) {
	    return $http({
	      method: 'post',
	      url: '/api/user/login',
	      data: user
	    }).then(function(response) {
	      return response;
	    });
	  };

	  this.logout = function() {
	    return $http({
	      method: 'get',
	      url: '/api/user/logout'
	    }).then(function(success) {
	      return success;
	    },
			function(error) {
				alert('Wrong credentials');
			}
		);
	  };

	  this.getCurrentUser = function() {
	    return $http({
	      method: 'GET',
	      url: '/api/user/getme'
	    }).then(function(response) {
	      return response.data;
	    });
	  };

	  this.registerUser = function(user) {
	    return $http({
	      method: 'POST',
	      url: '/api/user/register',
	      data: user
	    }).then(function(response) {
	      return response.data;
	    });
	  };

	  this.editUser = function(id, user) {
	    return $http({
	      method: 'PUT',
	      url: "/api/user/" + id,
	      data: user
	    }).then(function(response) {
	      return response;
	    });
	  };
});
