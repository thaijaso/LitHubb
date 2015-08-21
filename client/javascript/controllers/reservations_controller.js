myApp.controller('ReservationsController', function ($scope, $location, $routeParams, ReservationFactory, UserFactory) {
	// var userID = '';

	UserFactory.returnUser(function(data){
			userID = data;
		});

	ReservationFactory.getReservations(userID, function (reservations) {
			$scope.feed_reservations  = reservations;
		});

	ReservationFactory.getAllReservations(function(allReservations){
		console.log(allReservations);
			$scope.allreservations  = allReservations;
		});

	$scope.cancelOrder = function(reservationID) {
		ReservationFactory.cancelOrder(reservationID, function () {
			ReservationFactory.getReservations(userID, function (reservations) {
				$scope.feed_reservations  = reservations;
			});
		});
	}

	$scope.addOrder = function(newOrder, userID) {
		ReservationFactory.addOrder(newOrder, function () {
			$location.path('/feed');
		});
	}

	$scope.available = function(reservationID) {
		ReservationFactory.available(reservationID, function () {
			ReservationFactory.getAllReservations(function(allReservations){
				$scope.allreservations  = allReservations;
			});
		});
	}

	$scope.unavailable = function(reservationID) {
		ReservationFactory.unavailable(reservationID, function () {
			ReservationFactory.getAllReservations(function(allReservations){
				$scope.allreservations  = allReservations;
			});
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