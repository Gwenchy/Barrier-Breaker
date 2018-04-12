import React, {Component} from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";
import LangVid from '../../components/LangVid';

// gather other componets
//import otherComponent from "../otherComponent";

class Videos extends Component {

    state = {
        videosIds: ["QWEXFfqwh7w", "V8g3k5bICD0", "f4bHvdgTvos", "kkvp_Ec2liI", "3wIIRnv-qSk", "k-95HRUGEoo", "r1a4RCq4yKA", "ikojlvoF9rc", "iDATBj4jrG4", "5Xt65qLeq3I"]
    }


    render () {
        return (
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
			</div>
              {this.state.videosIds.map((videoId) => {
                return (
                    <LangVid
                        videoId={videoId} 
                    />
                )
            })}
            </div>
        );
    } }

export default Videos;