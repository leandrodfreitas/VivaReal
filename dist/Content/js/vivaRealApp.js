var app = angular.module("appVivaReal",[]);

app.controller('imoveisController', function($scope, $http, $filter) {
	
   $http.get('http://spotippos.vivareal.com/properties?ax=1&ay=1&bx=1400&by=1000')
	.success(function(data){		
		$scope.lista = data.properties;
	});
	
});