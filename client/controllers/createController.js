myApp.controller('createController', function($scope, $location, pollFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	var user;

	pollFactory.getUser(function(data){
		user = data[0];
		console.log("Here is my user on the createController: ", user.name);
	})

	$scope.create = function(){
		var name = user.name;
		var question = $scope.q.question;
		var option1 = $scope.q.option1;
		var count1 = 0;
		var option2 = $scope.q.option2;
		var count2 = 0;
		var option3 = $scope.q.option3;
		var count3 = 0;
		var option4 = $scope.q.option4;
		var count4 = 0;
		var new_question = {
			name: name,
			question: question,
			option1: option1,
			count1: count1,
			option2: option2,
			count2: count2,
			option3: option3,
			count3: count3,
			option4: option4,
			count4: count4
		};
		pollFactory.addQuestion(new_question, function(data){
			console.log(data);
		})
		$location.path("/dash");
	}

	console.log('I am able to load my indexController along with my index partial');

	// dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
	// 	console.log(data);
	// })
})