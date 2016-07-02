angular.module('yente')
	.controller('cloudGridController', function($scope) {
		var $element;
		var children = [];
		var $gridContainer = $('.grid');
		var items = 100;
		var columns;
		var rows;

		for (var i=0; i < items; i++) {
			// Set the number of rows and columns the element should use.
			$element = $('<div>').addClass('gridItem');
			columns = 1;
			rows = 1 + Math.floor(Math.random() * 2) % 2;

			$element.text(columns + 'x' + rows);
			$.data($element, 'grid-columns', columns);
			$.data($element, 'grid-rows', rows);
			$gridContainer.append($element);

			children.push($element);
		}

		$gridContainer.cloudGrid({
			children: children,
			gridGutter: 40,
			gridSize: $gridContainer.width() / 3
		});

		$(window).on('resize', function() {
			$gridContainer.cloudGrid('reflowContent');
		});
	});
