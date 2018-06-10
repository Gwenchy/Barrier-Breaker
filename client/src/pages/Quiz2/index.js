import React, {Component} from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";
import Questions from '../../components/Questions';

// gather other componets
//import otherComponent from "../otherComponent";

class Quiz extends Component {
	
	state = {
		spanishIds: [{
			question: "How do you say Hello?",
			answers: ["Como estas", "Hola", "Adios", "Hey"],
			correctAnswer: "Hola",
		}, {
			question: "How to answer when poeple say 'Gracias' to you?",
			answers: ["Hola", "Bien", "De nada", "Adios"],
			correctAnswer: "De Nada",
		}, {
			question: "When you hear the words 'Cual es tu nombre' what are they asking?",
			answers: ["What is your name", "How old are you", "When were you born", "Where do you come from"],
			correctAnswer: "What is your name",
		}, {
			question: "Which option says Good Bye:",
			answers: ["De nada", "Hola", "Adios", "Gracias"],
			correctAnswer: "Adios",
		}, {
			question: "I say 'Hola, como estas' and you can answer:",
			answers: ["Gracias", "Bien y usted", "Adios", "Como estas"],
			correctAnswer: "Bien y usted",
		}, {
			question: "How do you say Thank You?",
			answers: ["Bien", "Hola", "De nada", "Gracias"],
			correctAnswer: "Gracias",
		}, {
			question: "What does the word 'Amigo' means?",
			answers: ["Uncle", "Friend", "Partner", "Father"],
			correctAnswer: "Friend",
		}, {
			question: "What was the name of the principal at Bayside High in Saved By The Bell?",
			answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
			correctAnswer: "Mr.Belding",
		}],
		loadedQuestions: []
	}

	handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({
			loadedQuestions: this.state[event.target.value]
		})
	}
	
	render () {
		return(
			<div>
				<Nav
				brand= {["Welcome ", this.props.auth.username]}
				logout= {this.props.handleLogout}
				/>
				<div className = "container"> 
					<h1 className="text-center">Practice what you learned</h1>
					<h3>
						In this Section you will have the chance to test your knowledge with a few questions. 
						First choose the language you want to practice for and questions will be generated. 
						See if you can remember all that you have learned.
					</h3>
					<Dropdown
						name="Choose your Language"
						handleChange = {this.handleChange}
					/>
					<div className = "quizBox">
						{this.state.loadedQuestions && this.state.loadedQuestions.map((question, index) => {
							return (
								<Questions
									key={index}
									questionAsked= {question.question} 
									answers= {question.answers}
								/>
							)
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Quiz;