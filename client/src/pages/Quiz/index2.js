import React, {Component} from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";

// gather other componets
//import otherComponent from "../otherComponent";

class Quiz extends Component {
	
	state = {
		spanish: [{
			question: "What was the first full length CGI movie?",
			answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
			correctAnswer: "Toy Story",
			image: "assets/images/toystory.gif"
		}, {
			question: "Which of these is NOT a name of one of the Spice Girls?",
			answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
			correctAnswer: "Fred Spice",
			image: "assets/images/spicegirls.gif"
		}, {
			question: "Which NBA team won the most titles in the 90s?",
			answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
			correctAnswer: "Chicago Bulls",
			image: "assets/images/bulls.gif"
		}, {
			question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
			answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
			correctAnswer: "Nirvana",
			image: "assets/images/nirvanabark.gif"
		}, {
			question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
			answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
			correctAnswer: "The Lion King",
			image: "assets/images/lionking.gif"
		}, {
			question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
			answers: ["Dice", "Mirror", "Fresh", "Cab"],
			correctAnswer: "Fresh",
			image: "assets/images/fresh.gif"
		}, {
			question: "What was Doug's best friend's name?",
			answers: ["Skeeter", "Mark", "Zach", "Cody"],
			correctAnswer: "Skeeter",
			image: "assets/images/skeeter.gif"
		}, {
			question: "What was the name of the principal at Bayside High in Saved By The Bell?",
			answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
			correctAnswer: "Mr.Belding",
			image: "assets/images/belding.gif"
		}],
		loadedQuestions: []
	}

	handleChange = (event) => {
		event.preventDefault();
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
						{this.state.loadedQuestions.map((question) => {
						return (
							<div className = "container">
								<h2>{question.questions}</h2>
								<h3>{question.answers}</h3>
							</div>
						)
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Quiz;