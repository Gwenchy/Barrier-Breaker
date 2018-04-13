import React, {Component} from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Dropdown from "../../components/Dropdown";
import LangVid from '../../components/LangVid';

// gather other componets
//import otherComponent from "../otherComponent";

class Videos extends Component {

    state = {
        englishIds: [],
        spanishIds: ["QWEXFfqwh7w", "V8g3k5bICD0", "f4bHvdgTvos", "kkvp_Ec2liI", "3wIIRnv-qSk", "k-95HRUGEoo", "r1a4RCq4yKA", "ikojlvoF9rc", "iDATBj4jrG4", "5Xt65qLeq3I"],
        chineseIds: ["ApYHahBeBTQ","BizuZh0DWCk","UZeFTVJNIg4"],
        frenchIds:  ["I1dHsk1aRyE","6uhkUy1I4FM","iDSqpPeFCBg"],//https://www.youtube.com/watch?v=iDSqpPeFCBg&index=3&list=PLZNV0gmRjgU-fr4h3cEe96Yy75HKqh_KH
        loadedVideos: []
    }

        handleChange = (event) => {
            event.preventDefault();
            // console.log("hoello")
            console.log(event.target.value);
            this.setState({
                loadedVideos: this.state[event.target.value]
            });
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
                handleChange = {this.handleChange}
			/>
			</div>
            <div className = "text-center">
              {this.state.loadedVideos.map((videoId) => {
                return (
                    <LangVid
                        videoId={videoId} 
                        key = {videoId}
                    />
                )
            })}
            </div>
            </div>
        );
    } }

export default Videos;