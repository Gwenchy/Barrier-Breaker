import React from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    
    var spanishIds = [
    {
    question: "How do you say Hello?",
    answers: [ "Como estas", "Hola", "Adios", "Hey" ],
    correct: 1
    },
		{
		question: "How to answer when poeple say 'Gracias' to you?",
		answers: [ "Hola", "Bien", "Adios", "De nada" ],
		correct: 3
		},
    	{
		question: "When you hear the words 'Cual es tu nombre' what are they asking?",
		answers: [ "How old are you", "When were you born", "Where do you come from", "What is your name" ],
		correct: 3
		},
		{
		question: "IS is a ____",
		answers: [ "Word", "Band", "Terror Group", "Brand" ],
		correct: 2
		},
		{
		question: "Who was Einstein",
		answers: [ "A Scientist", "A Dentist", "A Serial Killer", "None of the above" ],
		correct: 0
		},
		{
		question: "JavaScript can be used in ____ development",
		answers: [ "Back-End", "Front-End", "ReactJS", "All of the Above" ],
		correct: 3
		},
		{
		question: "Hitler was a",
		answers: [ "Mass Murderer", "Dictator", "Jew", "None of the above", "All of the above" ],
		correct: 4
		},
		{
		question: "Korn is a",
		answers: [ "Nu-Metal band", "Religion", "Singer" ],
		correct: 0
		},
		{
		question: "Windows computers are",
		answers: [ "Horrible", "Great", "Cheap", "Invented by Bill Gates" ],
		correct: 3
		},
		{
		question: "The BigBan stands in",
		answers: [ "Egypt", "London", "Amsterdam", "NewYork" ],
		correct: 1
		},
    ];
    
    this.state = {current:0, spanishIds:spanishIds, correct:0, incorrect:0}
    this.handleClick = this.handleClick.bind(this)
    
  } // end constructor

handleChange = (event) => {
  event.preventDefault();
  console.log(event.target.value);
  this.setState({
    loadedQuestions: this.state[event.target.value]
  })
}
  
  handleClick(choice) {
    if (choice === this.state.spanishIds[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    
    if (this.state.current === 9) {
      this.setState({current: 0})
      this.setState({incorrect: 0})
      this.setState({correct: 0})
    } else {
         this.setState({current: this.state.current + 1}) 
    }
  }
  
  render() {
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
              <div>
              <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
              <QuizArea handleClick={this.handleClick} spanishIds={this.state.spanishIds[this.state.current]} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
  }
}

function Question(props) {
  var style = {
    color: "red",
  }
  return (
    <h1 style={style}>{props.spanishIds.question}</h1>
  )
}

function Answer(props) {
  var style = {
    width: "100%",
    height: 50,
    color: "blue"
  }
  return(
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}

function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.spanishIds.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.spanishIds.answers[i]} />)
  }
  return(
    <div>
      {answers}
    </div>
  )
}

function QuizArea(props) {
  var style = {
    width: "50%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    margin: "auto",
    padding: "0 2em"
  }
  return(
    <div style={style}>
      <Question spanishIds={props.spanishIds} />
      <AnswerList spanishIds={props.spanishIds} handleClick={props.handleClick} />
    </div>
  )
}

function TotalCorrect(props) {
    var style = {
    display: "inline-block",
    padding: "1em",
	background: "#663399",
	color: "white",
    margin: "0 1em 0 0"
  }
  return(
    <h2 style={style}>Correct: {props.correct}</h2>
  )
}

function TotalIncorrect(props) {
  var style = {
    display: "inline-block",    
    padding: "1em",
	background: "#663399",
	color: "white",
    margin: "0 0 0 1em"
  }
  return(
    <h2 style={style}>Incorrect: {props.incorrect}</h2>
  )
}

function ScoreArea(props) {
  var style = {
    width: "100%",
    display: "block",
    textAlign: "center",
    margin: "auto",
    padding: "2em"
  }
  return(
    <div style={style} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  )
}

export default Quiz;