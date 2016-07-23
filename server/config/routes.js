var polls = require('./../controllers/mongooses.js');

module.exports = function(app){
	app.post('/question', function(req, res){
	console.log("made it to app.post /polls");
	polls.addPoll(req, res);
	})

	app.get('/questions', function(req, res){
	console.log("made it to app.get /questions");
	polls.getPolls(req, res);
	})

	app.get('/question/:id', function(req, res){
	console.log("made it to app.get /question singular");
	polls.getPoll(req, res);
	})

	app.delete('/delete/:id', function(req, res){
	console.log("made it to app.get /delete");
	polls.deletePoll(req, res);
	})

	app.get('/vote1/:id', function(req, res){
	console.log("made it to vote1 on routes page");
	polls.vote1(req, res);
	})

	app.get('/vote2/:id', function(req, res){
	console.log("made it to vote2 on routes page");
	polls.vote2(req, res);
	})

	app.get('/vote3/:id', function(req, res){
	console.log("made it to vote2 on routes page");
	polls.vote3(req, res);
	})

	app.get('/vote4/:id', function(req, res){
	console.log("made it to vote4 on routes page");
	polls.vote4(req, res);
	})
}