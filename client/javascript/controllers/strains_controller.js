myApp.controller('StrainsController', function ($scope, StrainFactory) {

	StrainFactory.getStrains(function (response){
		$scope.strains = response;
		console.log('logging the strains: ', $scope.strains);
	});


	$scope.nextPage = function(){
		StrainFactory.getNext()
	}
	
});