myApp.controller('ReservationsController', function ($scope, $location, $routeParams, ReservationFactory, UserFactory) {
	ReservationFactory.getItem($routeParams.vendor_id, $routeParams.strain_id, function (item){
		console.log(item);
		$scope.name = item[0].vendor_name;
		$scope.vendorID = item[0].vendor_id;
		$scope.strainName = item[0].strain_name;
		$scope.imgSRC = item[0].fullsize_img1;
		$scope.desc = item[0].description;
		$scope.price_gram = item[0].price_gram;
		$scope.category = item[0].category;
	});

	UserFactory.returnUser(function(data){
			userID = data;
		});

	ReservationFactory.getReservations(userID, function (reservations) {
			$scope.reservations  = reservations;
		});

	$scope.cancelOrder = function(reservationID) {
		ReservationFactory.cancelOrder(reservationID, function () {
			ReservationFactory.getReservations(userID, function (reservations) {
				$scope.reservations  = reservations;
			});
		});
	}

	$scope.addOrder = function(newOrder, vendorID) {
		ReservationFactory.addOrder(newOrder, sessionStorage.getItem('sessionID'), vendorID, function () {
			$location.path('/feed');
		});
	}

	});

	// $scope.addQuestion = function() {

	// 	var user = person
	// 	QuestionFactory.addQuestion($scope.newQuestion, user, function (questions) {
	// 		$scope.questions = questions;
	// 		$scope.newQuestion = {};
	// 		$location.path('/home.html');
	// 	});	
	// }



	// if ($routeParams.id) {
	// 	QuestionFactory.getQuestion($routeParams.id, function(question) {
	// 		// console.log('user requesting one question: ', question);
	// 		$scope.questions = question;
	// 	});
	// }



	// $scope.likeAnswer = function(questionId) {
	// 	QuestionFactory.likeAnswer(questionId, function (updatedQuestion) {
	// 		$scope.questions = updatedQuestion;
	// 	});
	// }

// });