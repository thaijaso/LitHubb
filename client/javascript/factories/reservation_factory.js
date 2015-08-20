myApp.factory('ReservationFactory', function($http) {
	var factory = {};

	// [{id: 1, created_at: Date.now(), vendor: 'Green Theory', product: 'Blue Dream', quantity: 2, total: 20, status: 0}, {id: 2, name: 'Derferick', swag: 'below average'}];
	// [{id: 1, name: Jason, swag: med}];

	factory.getReservations = function(userID, callback) {
		$http.post('/getReservations', {id: userID}).success(function (reservations) {
			// console.log('we are inside the reservation factory', reservations);
			callback(reservations);
		});
	  }

	factory.cancelOrder = function(reservationID, callback) {
		console.log(reservationID);
		// $http.post('/removeQuestion', reservationID).success(function (removedQuestion) {
		// 	questions.splice(questions.indexOf(reservationID), 1);
		// 	callback(questions);
		// });
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
// });				  	
		// $http.get('/getQuestions').success(function (data) {
		// 	questions = data;
		// 	callback(questions);
	

	// factory.addQuestion = function(newQuestion, user, callback) {
	// 	newQuestion.name = user;
	// 	$http.post('/addQuestion', {name: newQuestion.name, question: newQuestion.question, description: newQuestion.description, created_at: Date.now()})
	// 	.success(function (addedQuestion) {questions.push(addedQuestion);
	// 		callback(questions);
	// 	});
	// }



	// factory.getQuestion = function(questionId, callback) {
	// 	$http.get('/getQuestion/' + questionId).success(function (question) {
	// 		callback(question);
	// 	});
	// }

	// factory.addAnswer = function(newQuestion, questionId, callback) {
	// 	console.log(person);
	// 	newQuestion.answers.name = person;
	// 	var information = newQuestion;


	// 	$http.post('/newAnswer/' + questionId, information).success(function (addedQuestion) {
	// 		questions.push(addedQuestion);
	// 		callback(questions);
	// 	});
	// }

	// factory.likeAnswer = function(questionId, callback) {

	// 	$http.get('/likeAnswer/' + questionId).success(function(output){
	// 		var updatedQuestion;

	// 		$http.get('/getQuestions').success(function (data) {
	// 			for (var i = 0; i < data.length; i++) {
	// 				for (var k = 0; k < data[i].answers.length; k++) {
	// 					if (data[i].answers[k]._id == questionId) {
	// 						updatedQuestion = data[i];
	// 						callback(updatedQuestion);
	// 						break;
	// 					}
	// 				}
	// 			}
	// 		});

	// 	})
	// }

