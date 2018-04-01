import React from 'react';
import "./style.css";
import Nav from "../../components/Nav"

const Home = (props) =>{
	return (
		<div>
		<Nav
			brand= {["Welcome ", props.auth.username]}
			logout= {props.handleLogout}
		/>
		{/* I wrote this text to see if it would render in the home page at the browser... but it didn't. It direct you to home page... but not my home page... */}
		<h1>Crazy shit goes here.</h1>
		<header>Show me this freaking text...</header>
		</div>
	);
}

export default Home;