import React from 'react';
import "./style.css";
import Nav from "../../components/Nav"

// gather other componets
//import otherComponent from "../otherComponent";

const Chat = (props) => {
	return(
		<div>
			<Nav
				brand= {["Welcome ", props.auth.username]}
				logout= {props.handleLogout}
			/>
		</div>
	);
}

export default Chat;