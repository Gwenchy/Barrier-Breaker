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
    return (
      <div>
        <Navbar className="navColor" dark expand="sm">
        {/* <Navbar color="light" light expand="sm"> */}
          <NavbarBrand href="/">{this.props.brand}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem className="linkColor bar">
                <Link className="nav-link" to="/home">Home</Link>
              </NavItem>
              <NavItem className="linkColor bar">
                <Link className="nav-link" to="/quiz">Quiz</Link>
              </NavItem>
			      <NavItem className="linkColor bar">
                <Link className="nav-link" to="/videos">Videos</Link>
              </NavItem>
			      <NavItem className="linkColor bar">
                <Link className="nav-link" to="/contact">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
		  <button className="btn btn-primary my-2 my-sm-0" onClick = {this.props.logout}>Log Out</button>
        </Navbar>
      </div>
    );
  }
}
