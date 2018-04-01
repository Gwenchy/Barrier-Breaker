import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

// gather other componets
//import otherComponent from "../otherComponent";

const Nav = (props) => {
	return(
		<nav className="navbar navbar-expand-lg navColor">
			<a className="navbar-brand linkColor" href="/">{props.brand}</a>

			<div className="navbar" id="navbarColor03">
				<ul className="navbar-nav mr-auto">
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/home">Home</Link>
				</li>
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/videos">Videos</Link>
				</li>
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/quiz">Quiz</Link>
				</li>
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/chat">Chat</Link>
				</li>
				</ul>
				<button className="btn btn-secondary my-2 my-sm-0" onClick = {props.logout}>Log Out</button>
			</div>
		</nav>
	);
}

export default Nav;