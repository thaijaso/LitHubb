myApp.controller('MapsController', function ($scope, MapFactory, $location, $routeParams) {

	$scope.map = { 
		center: { latitude: 47.605628, longitude: -122.253799 }, 
		zoom: 12 
	};

	$scope.markers = [];
	$scope.dispName = "";
  //   function clickedMarker(position) {
  //   	console.log('in the clicked marker function');
  //   	console.log('finding the tradename in the markers. Found object?: ', $scope.markers[position]);
		// //need to set the name of the window
  //   }

  	$scope.onClick = function(position) {
  		console.log('marker position onClick: ', position);
  	};

	$scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

	//gets all of the dispensaries from the factory function
	MapFactory.getCoords(function (dispensaries){
		console.log('in the front end, here is the data', dispensaries.data);
		for (var i = 0; i < dispensaries.data.length; i++) {
			var vendorID = dispensaries.data[i].id;
			var tradeName = dispensaries.data[i].Tradename;
			var position = i;
			var markerObject = {
				id: dispensaries.data[i].id,
				address: dispensaries.data[i].address,
				hours: dispensaries.data[i].hours,
				coords: {latitude: dispensaries.data[i].lat, longitude: dispensaries.data[i].lng },
				//info window stuff
				title: dispensaries.data[i].Tradename,
				show: false,
				content: position,
				click: function(marker) {
					//immediately runs
					console.log('marker sent: ', marker.model);
					marker.model.show = !marker.model.show;
				}
			};
			//Marker object created

			//end of for loop iteration, pushing the marker object
			$scope.markers.push(markerObject);
			
		};
		//end for loop
	})
	//end get coords
	
	// $scope.markers = [
	//    	{ 
	//    		id: 1, 
	// 		coords: {latitude: 47.609811, longitude: -122.198494 }, 
	// 		icon: './../assets/icons/marker.png',
	// 		click: function(marker) {
	// 			var vendorID = marker.$$childHead.models[0].id;
	// 			$scope.$apply(function() {
	// 				$location.path('/vendor/' + vendorID);
	// 			});	
	// 		}
	// 	},

	// 	{ 
	//    		id: 3, 
	// 		coords: {latitude: 47.6131, longitude: -122.302 }, 
	// 		icon: './../assets/icons/marker.png',
	// 		click: function(marker) {
	// 			var vendorID = marker.$$childHead.models[1].id;
	// 			console.log(marker);
	// 			console.log(vendorID);
				// $scope.$apply(function() {
				// 	$location.path('/vendor/' + vendorID);
				// });	
	// 		}
	// 	}

	// ];

	// $scope.windows = [
		// {
		// 	id: 1, 
		// 	coords: {latitude: 47.619921, longitude: -122.198494 }, 
		// 	show: 'TRUE',
		// 	templateUrl: './../partials/window.html',
		// 	templateParameter: {},
		// 	isIconVisibleOnClick: 'TRUE',
		// 	closeClick: function() {
		// 		alert('close click');f
		// 	}
		// }
	// ];
});