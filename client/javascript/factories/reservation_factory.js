myApp.factory('ReservationFactory', function($http) {
	var factory = {};

	factory.getReservations = function(userID, callback) {
		$http.post('/getReservations', {id: userID}).success(function (reservations) {
			callback(reservations);
		});
	  }

	factory.getAllReservations = function(callback) {
		$http.get('/getAllReservations').success(function (allReservations) {
			console.log(allReservations);
			callback(allReservations);
		});
	  }

	factory.cancelOrder = function(reservationID, callback) {
		$http.post('/cancelOrder', {id: reservationID}).success(function () {
			callback();
		});
	}

	factory.addOrder = function(newOrder, userID, callback) {
		$http.post('/addOrder', {user_id: newOrder.user_id, vendor_id: newOrder.vendor_id, quantity_gram: newOrder.quantity_gram, quantity_eigth: newOrder.quantity_eigth, quantity_quarter: newOrder.quantity_quarter, quantity_half: newOrder.quantity_half, quantity_oz: newOrder.quantity_oz, created_at: Date.now(), updated_at: Date.now(), status: 0})
		.success(function () {
			callback();
		});
	}

	  return factory;
	});

// 	getReservations = function(callback) {
		// var reservation = {{_id: 1},
		// 				  {name: Jason},
		// 				  {reservations: [{_id: 1,
		// 								   created_at: today,
		// 								   vendor: green theory,
		// 								   product: blue dream,
		// 								   quantity: 2g,
		// 								   total: 24,
		// 								   status: 0
		// 								  }]
		// 				  }
// 		};
// 	}

// 	return factory;