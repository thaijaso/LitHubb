myApp.controller('ReservationsController', function ($scope, $location, $routeParams, ReservationFactory, UserFactory) {
	var userID = '';

	UserFactory.returnUser(function(data){
			userID = data;
		});

	ReservationFactory.getReservations(userID, function (reservations) {
			$scope.reservations  = reservations;
			// console.log(reservations);
		});
	});


	// $scope.addQuestion = function() {

	// 	var user = person
	// 	QuestionFactory.addQuestion($scope.newQuestion, user, function (questions) {
	// 		$scope.questions = questions;
	// 		$scope.newQuestion = {};
	// 		$location.path('/home.html');
	// 	});	
	// }

	// $scope.removeQuestion = function(question) {
	// 	QuestionFactory.removeQuestion(question, function (questions) {
	// 		$scope.questions = questions;
	// 	});
	// }

	// if ($routeParams.id) {
	// 	QuestionFactory.getQuestion($routeParams.id, function(question) {
	// 		// console.log('user requesting one question: ', question);
	// 		$scope.questions = question;
	// 	});
	// }

	// $scope.addAnswer = function() {
	// 	QuestionFactory.addAnswer($scope.newQuestion, $routeParams.id, function (questions) {
	// 		$scope.questions = questions;
	// 		$scope.newQuestion = {};
	// 		$location.path('/home.html');
	// 	})
	// }

	// $scope.likeAnswer = function(questionId) {
	// 	QuestionFactory.likeAnswer(questionId, function (updatedQuestion) {
	// 		$scope.questions = updatedQuestion;
	// 	});
	// }

// });