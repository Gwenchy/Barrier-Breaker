import React, {Component} from 'react';
import "./style.css";
import YouTube from "react-youtube";

// gather other componets
//import otherComponent from "../otherComponent";

class LangVid extends Component {
  
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

export default LangVid;