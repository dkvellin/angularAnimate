(function(){

	var myapp = angular.module('animateApp', ['ngAnimate']);

	myapp.controller('AnimateController', function($scope) {

		$scope.names = ["Card 1","Card 2","Card 3"];
		$scope.newright_items= [];

		$scope.animate = function(name){
			
			$scope.newright_items.unshift(name);

			var i = $scope.names.indexOf(name);
			if (i > -1) {
				$scope.names.splice(i, 1);  
			}
			
		}

	});

})();

