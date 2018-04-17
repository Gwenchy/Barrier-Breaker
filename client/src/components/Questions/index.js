import React from 'react';
import "./style.css";


// gather other componets
//import otherComponent from "../otherComponent";

const Questions = (props) => {
	console.log(props)
	return (
		<div>
			<form>
			<h4>{props.questionAsked}</h4>
				<div className="form-check">
					{props.answers.map((answer, index) =>{
						return (
							<div key={index}>
								<input className="form-check-input" type="radio" name="exampleRadios" value={answer} />
								<label className="form-check-label" htmlFor="exampleRadios">
									{answer}
								</label>
							</div>
						);
					})}
				</div>
			</form>
		</div>
	);
}



export default Questions;