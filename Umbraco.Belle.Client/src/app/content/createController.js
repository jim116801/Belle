app.controller("contentCreateController", function ($scope, $routeParams,contentTypeFactory) {	
	$scope.allowedTypes  = contentTypeFactory.allowedTypes($scope.currentNode.id);	
});