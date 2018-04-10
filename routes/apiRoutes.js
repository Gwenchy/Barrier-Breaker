module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	const db = require("../models");
	const QuizQuestion = db.QuizQuestion;
	const VideosId = db.VideosId;


	//add any API routes here
	router.post("/addQuestion", function(req,res){
		// console.log(req.body);
		QuizQuestion.create(req.body).then(function(newQuestion){
			console.log(newQuestion);
			res.json(newQuestion);
		});
	});

	router.get("/getQuestions", function(req,res){
		QuizQuestion.find().then( function(foundQuestions){
			res.json(foundQuestions);
		});
	});

	router.post("/getVideosId", function(req,res){
		VideosId.create(req.body).then(function(newVideosId){
			console.log(newVideosId);
			res.json(newVideosId);
		});
	});

	router.get("/getVideosId", function(req,res){
		VideosId.find().then( function(foundVideosId){
			res.json(foundVideosId);
		});
	});

	return router;
};