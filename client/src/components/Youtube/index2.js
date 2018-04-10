
import React, {Component} from "react";

const API = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"
const channelID = "UCXgGY0wkg0zynnHvSEVmE3A"
const result = 10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


class YouTube extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
            const resultyt = responseJson.items.map(obj => obj.id.videoId)
            this.setState({resultyt});
            console.log(this.state.resultyt)
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={this.clicked}>Get Youtube Video</button>

            <div className="youtube">
            <iframe width="1280" height="720" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        );
    }
}

export default YouTube;