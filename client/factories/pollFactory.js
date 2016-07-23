myApp.factory('pollFactory', function($http){
	var polls = [];
	var question = [];
	var factory = {};
	var user = [];

	factory.addUser = function(info, callback){
		user.push(info);
		callback(console.log(user));
	}

	factory.getUser =function(callback){
		callback(user);
	
	}

	factory.addQuestion = function(info, callback){
		$http.post('/question', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				polls.push(data)
				callback(polls);
			}
		})
	}

	factory.getQuestions = function(callback){
		console.log("got to getQuestions on pollFactory");
		$http.get('/questions').then(function(data){
			polls.push(data);
			callback(polls);
		})
	}

	factory.getQuestion = function(qId, callback){
		console.log("got to getQuestion singular");
		$http.get('/question/' + qId).then(function(data){
			callback(data);
		})
	}

	factory.vote1 = function(qId, callback){
		console.log("got to vote1");
		$http.get('/vote1/' + qId).then(function(data){
			callback(data);
		})
	}

	factory.vote2 = function(qId, callback){
		console.log("got to vote1");
		$http.get('/vote2/' + qId).then(function(data){
			callback(data);
		})
	}

	factory.vote3 = function(qId, callback){
		console.log("got to vote3");
		$http.get('/vote3/' + qId).then(function(data){
			callback(data);
		})
	}

	factory.vote4 = function(qId, callback){
		console.log("got to vote4 on pollFactory");
		$http.get('/vote4/' + qId).then(function(data){
			callback(data);
		})
	}

	return factory;
})