import React from 'react';
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
  import { Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { location } = this.props;
    const homeClass = location.pathname === "/" ? "active" : "";
    const quizClass = location.pathname.match(/^\/quiz/) ? "active" : "";
    const videosClass = location.pathname.match(/^\/videos/) ? "active" : "";
    const chatClass = location.pathname.match(/^\/chat/) ? "active" : "";

    return (
      <div>
        <Navbar className="navColor" dark expand="sm">
        {/* <Navbar color="light" light expand="sm"> */}
          <NavbarBrand href="/">{this.props.brand}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem className="linkColor" class={homeClass}>
                <Link className="nav-link bar" to="/home">Home</Link>
              </NavItem>
              <NavItem className="linkColor" class={quizClass}>
                <Link className="nav-link bar" to="/quiz">Quiz</Link>
              </NavItem>
			      <NavItem className="linkColor" class={videosClass}>
                <Link className="nav-link bar" to="/videos">Videos</Link>
              </NavItem>
			      <NavItem className="linkColor" class={chatClass}>
                <Link className="nav-link bar" to="/chat">Chat</Link>
              </NavItem>
            </Nav>
          </Collapse>
		  <button className="btn btn-primary my-2 my-sm-0" onClick = {this.props.logout}>Log Out</button>
        </Navbar>
      </div>
    );
  }
}
