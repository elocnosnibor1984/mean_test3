myApp.controller('showController', function($scope, $routeParams, pollFactory){

	console.log('I am able to load my showController along with my index partial');
	var id = $routeParams.id;
	console.log("question: ", id);
	pollFactory.getQuestion(id, function(data){
		console.log('show controller,', data);
		$scope.question = data.data[0];
	})

	$scope.vote1 = function(){
		pollFactory.vote1(id, function(data){
			console.log("vote1 on the showController");
			pollFactory.getQuestion(id, function(data){
		console.log('show controller,', data);
		$scope.question = data.data[0];
	})
		})
	}

	$scope.vote2 = function(){
		pollFactory.vote2(id, function(data){
			console.log("vote2 on the showController");
			pollFactory.getQuestion(id, function(data){
		console.log('show controller,', data);
		$scope.question = data.data[0];
	})
		})
	}

	$scope.vote3 = function(){
		pollFactory.vote3(id, function(data){
			console.log("vote3 on the showController");
			pollFactory.getQuestion(id, function(data){
		console.log('show controller,', data);
		$scope.question = data.data[0];
	})
		})
	}

	$scope.vote4 = function(){
		// console.log("got to vote4 on showController");
		pollFactory.vote4(id, function(data){
			console.log("vote4 on the showController");
			pollFactory.getQuestion(id, function(data){
		console.log('show controller,', data);
		$scope.question = data.data[0];
	})
		})
	}
	
})