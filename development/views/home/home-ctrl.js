angular.module('yente')
	.controller('HomeController', function($scope, projectsService) {

		function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

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

		projectsService.getAllProjects()
			.then(function(results) {
				results = shuffle(results);
				homeCtrl.projects = results;
			});

	});
