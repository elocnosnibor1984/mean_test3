var mongoose = require('mongoose');
var surveyDb = mongoose.model('SurveyDb');

module.exports = (function() {
	return {
		addPoll: function(req,res){
			console.log("hello from addPoll", req.body);
			var new_survey = new surveyDb(req.body);
			new_survey.save(function(err){
				if(err){
					console.log("failed to add poll to db");
					res.json(err);
				} else {
					console.log("added poll to the db");
				}
			})
		},
		getPolls: function(req, res){
			surveyDb.find({}, function(err, surveys){
				if(err){
					console.log(err);
					
				} else {
					console.log('got surveys from backend controller');
					res.json(surveys);
				}
			})
		},

		getPoll: function(req, res){
			surveyDb.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					console.log('this is our question',result);
					res.json(result);
				}
			})
		},

		vote1: function(req, res){
			surveyDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					result.count1 += 1;
					console.log(result);
					result.save(function(err,result){
					console.log('this is the new count');
					res.json(result);
					})
					
				}
			})
		},

		vote2: function(req, res){
			surveyDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					result.count2 += 1;
					console.log(result);
					result.save(function(err,result){
					console.log('this is the new count');
					res.json(result);
					})
					
				}
			})
		},

		vote3: function(req, res){
			surveyDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					result.count3 += 1;
					console.log(result);
					result.save(function(err,result){
					console.log('this is the new count');
					res.json(result);
					})
					
				}
			})
		},

		vote4: function(req, res){
			surveyDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					result.count4 += 1;
					console.log(result);
					result.save(function(err,result){
					console.log('this is the new count');
					res.json(result);
					})
					
				}
			})
		}
	}
})();