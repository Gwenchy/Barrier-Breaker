import React from 'react';
import "./style.css";
import Modal from "../ModalExample";
import SignIn from "../SignIn";


// gather other componets import otherComponent from "../otherComponent";

const Jumbotron = (props) => {
	return (
			<div className="jumbotron-fluid jumboStyle">
				<div className="container">
					<h1 className="display-3 text-center">{props.jumbotron}</h1>
					<h2 className="lead text-center">{props.jumboText}</h2>
					<hr className="my-4 text-center"/>
					<h3 className="text-center">{props.jumboText2}</h3>
					<div className="lead text-center">
					<Modal buttonLabel="SignIn">
						<SignIn 
							handleChange= {props.handleChange} 
							handleSubmit = {props.handleSubmit}
							email = {props.email}
							password = {props.password}   
						/>	
					</Modal>
					</div>
				</div>
			</div>
	);
}

export default Jumbotron;