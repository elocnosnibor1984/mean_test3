myApp.controller('dashController', function($scope, $location, pollFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	pollFactory.getQuestions(function(data){
		console.log("got to dashController, get questions");
		$scope.questions = data[0].data;
		
	})

	pollFactory.getUser(function(data){
		$scope.user = data[0];
		console.log("Here is my user: ", data[0]);
	})

	$scope.logout = function(){
		pollFactory.logoutUser(function(){
			console.log("logged out");
			$location.path('/');
		})
	}

	$scope.delete = function(id){
		console.log("Delete on dashController", id);
		pollFactory.delete(id, function(){
			pollFactory.getQuestions(function(data){
			console.log("got to getQuestions inside delete", data);
			$scope.questions = data[0].data;
		
	})
		})
	}

	// $scope.delete = function(id){
	// 	console.log("Delete ID: ", id);
	// 	pollFactory.delete(function(id, function(){
	// 		pollFactory.getQuestions(function(data){
	// 		console.log("got to dashController, get questions");
	// 		$scope.questions = data[0].data;
		
	// })
	// 	})
	// 		callback(console.log("delete on dashController"));
	// }

	console.log('I am able to load my indexController along with my index partial');

	// dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
	// 	console.log(data);
	// })
})