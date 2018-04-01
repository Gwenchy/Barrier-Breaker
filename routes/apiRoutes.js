module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	const db = require("../models");
	const QuizQuestion = db.QuizQuestion;


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

	return router;
};