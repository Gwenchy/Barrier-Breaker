import React from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";
import YouTube from '../../components/Youtube';

// gather other componets
//import otherComponent from "../otherComponent";

const Videos = (props) => {
	return(
		<div>
		<Nav
			brand= {["Welcome ", props.auth.username]}
			logout= {props.handleLogout}
		/>
			
			<div className="container text-center">
			<h1>Which Language do you want to learn?</h1>
			<Dropdown
			name="Choose your Language"
			/>

			<YouTube
			video = {this.handleInputChange}
			/>
			
			</div>
		</div>
	);
}

export default Videos;