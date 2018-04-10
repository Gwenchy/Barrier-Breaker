import React, { Component } from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";
import YouTube from '../../components/Youtube';
import API from "../../utils/API";

// gather other componets
//import otherComponent from "../otherComponent";

class Videos extends Component {

	state = {
		videosId: [],
		title: ""
	};

	componentDidMount() {
		this.loadVideos();
	}

	loadVideos = () => {
		API.getVideosId()
		  .then(res =>
			this.setState({ books: res.data, title: ""})
		  )
		  .catch(err => console.log(err));
	  };


	render(props){
	return(
		<div>
		<Nav
			brand= {["Welcome ", this.props.auth.username]}
			logout= {this.props.handleLogout}
		/>
			
			<div className="container text-center">
			<h1>Which Language do you want to learn?</h1>
			<Dropdown
			name="Choose your Language"
			/>

			<YouTube
			video = {this.state.videosId.map(book => {
				return (
					<a href={"/videosId/"}>
					</a>
				);
			  })}
			/>
			
			</div>
		</div>
	);
}
}

export default Videos;