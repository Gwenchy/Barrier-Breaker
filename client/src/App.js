import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';


import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
        <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <Main 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          }  
        }}/>
        <Route exact path = "/home" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/videos" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Videos handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/Contact" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Contact handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/quiz" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Quiz handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        {/* this is what I need to copy to create a route
        -------------------------------------------------------------------------- 
        <Route exact path = "/poop" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
         ---------------------------------------------------------------------- */}
        </div>
      </Router>
    );
  }
}

export default App;