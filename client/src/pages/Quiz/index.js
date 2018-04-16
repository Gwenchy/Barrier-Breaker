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
			correctAnswer: "Toy Story",
		}, {
			question: "Which of these is NOT a name of one of the Spice Girls?",
			answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
			correctAnswer: "Fred Spice",
		}, {
			question: "Which NBA team won the most titles in the 90s?",
			answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
			correctAnswer: "Chicago Bulls",
		}, {
			question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
			answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
			correctAnswer: "Nirvana",
		}, {
			question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
			answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
			correctAnswer: "The Lion King",
		}, {
			question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
			answers: ["Dice", "Mirror", "Fresh", "Cab"],
			correctAnswer: "Fresh",
		}, {
			question: "What was Doug's best friend's name?",
			answers: ["Skeeter", "Mark", "Zach", "Cody"],
			correctAnswer: "Skeeter",
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
				<div className = "container text-center"> 
					<h1>Practice what you learned</h1>
					<Dropdown
						name="Choose your Language"
						handleChange = {this.handleChange}
					/>
					<div className = "text-center">
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