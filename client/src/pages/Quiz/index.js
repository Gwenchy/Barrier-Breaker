import React from 'react';
import "./style.css";
import Nav from "../../components/Nav";

// gather other componets
//import otherComponent from "../otherComponent";

const Quiz = (props) => {
	return(
		<div>
		<Nav
			brand= {["Welcome ", props.auth.username]}
			logout= {props.handleLogout}
		/>
		<h1>Crazy shit goes here.</h1>
		<header>Show me this freaking text...</header>
		</div>
	);
}

export default Quiz;