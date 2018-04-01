import React from 'react';
import "./style.css";
import Nav from "../../components/Nav"

// gather other componets
//import otherComponent from "../otherComponent";

const Videos = (props) => {
	return(
		<Nav
			brand= {["Welcome ", props.auth.username]}
			logout= {props.handleLogout}
		/>
	);
}

export default Videos;