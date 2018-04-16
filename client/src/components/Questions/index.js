import React from 'react';
import "./style.css";


// gather other componets
//import otherComponent from "../otherComponent";

const Questions = (props) => {
	console.log(props)
	return (
		<div>
			<h4>{props.questionAsked}</h4>
			<ul>
				{props.answers.map((answer, index) => <li key={index}>{answer}</li>)}
			</ul>
		</div>
	);
}



export default Questions;