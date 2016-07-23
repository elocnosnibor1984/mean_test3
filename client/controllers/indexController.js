myApp.controller('indexController', function($scope, $location, pollFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	
	$scope.login = function(){
		pollFactory.addUser($scope.name, function(data){
			$location.path("/dash");
		})
	}

	console.log('I am able to load my indexController along with my index partial');

	// dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
	// 	console.log(data);
	// })
})