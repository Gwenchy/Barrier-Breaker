import React from 'react';
import "./style.css";
import Jumbotron from '../../components/Jumbotron';
import Card from "../../components/Card";

// gather other componets
//import otherComponent from "../otherComponent";

const Main = (props) => {
	return(
		<div className="bg-light">
			<Jumbotron
			jumbotron="Language Barrier Breaker"
			jumboText="Where we break the barriers between countries"
			jumboText2="Please log in to enjoy learning in a very simple and easy to use application"
			handleChange= {props.handleChange}
			handleSubmit={props.handleSubmit}
			/>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
					<Card
					cardHeader={<h2>Learn New Language</h2>}
					cardTitle="Few courses that will help you harness your skills"
					cardText="But you got to put the effort ar the time"
					/>
					</div>
					<div className="col">
					<Card
					cardHeader={<h2>Conect With People</h2>}
					cardTitle="With chatrooms you can talk to others around the world"
					cardText="And you dont have to know their language"
					/>
					</div>
					<div className="col">
					<Card
					cardHeader={<h2>Know The World</h2>}
					cardTitle="By communicating you will learn about other cultures"
					cardText="Maybe find a person to travle with"
					/>
					</div>
				</div>
			</div>
			<div className="container-fluid textColor">
				<div className="row">
					<div className="col">
						<br/>
						<h1 className="text-center">About us</h1><br/>
						<h2>
						&emsp;&emsp; This is a project I have made with the help of some of my fellow classmates and the Teacher's Assistants in the UCF Coding Bootcamp.
						The purpose of this page is to facilitate the connection between people of around the world by making it easier to learn the different languages. 
						We want you to feel comfortable learning and reach your goal at your own pace. 
						With the low price of free you can enjoy the page to the fullest and comical with other people in your native language even if they don’t speak it. 
						All thanks to the Watson being the brains of our translator. 
						Please enjoy and leave us any feedback for what we can do to improve.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;