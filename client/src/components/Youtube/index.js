import React from 'react';
import "./style.css";
import YouTube from "react-youtube";

// gather other componets
//import otherComponent from "../otherComponent";

class YouTubeVid extends React.Component {
  
  render(props) {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const videosId = [{
      "VideoId":"QWEXFfqwh7w",
      "language":"Spanish",
      "order":1
    },
    {
      "VideoId":"V8g3k5bICD0",
      "language":"Spanish",
      "order":2
    },
    {
      "VideoId":"f4bHvdgTvos",
      "language":"Spanish",
      "order":3
    },
    {
      "VideoId":"kkvp_Ec2liI",
      "language":"Spanish",
      "order":4
    },
    {
      "VideoId":"3wIIRnv-qSk",
      "language":"Spanish",
      "order":5
    },
    {
      "VideoId":"k-95HRUGEoo",
      "language":"Spanish",
      "order":6
    },
    {
      "VideoId":"r1a4RCq4yKA",
      "language":"Spanish",
      "order":7
    },
    {
      "VideoId":"ikojlvoF9rc",
      "language":"Spanish",
      "order":8
    },
    {
      "VideoId":"iDATBj4jrG4",
      "language":"Spanish",
      "order":9
    },
    {
      "VideoId":"5Xt65qLeq3I",
      "language":"Spanish",
      "order":10
    }];

    return (
      <div>
      {this.state.videosId.map(videoId => (
      <YouTube
        videoId={videosId}
        opts={opts}
        onReady={this._onReady}
      />
      ))}
      </div>
    );
  }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

export default YouTubeVid;