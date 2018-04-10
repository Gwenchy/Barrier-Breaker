import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


	myFunction() {
    console.log("Hello World")
}

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Choose your Language
        </DropdownToggle>
        <DropdownMenu className="text-center">
          <DropdownItem onClick= {this.myFunction} >English</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick= {this.myFunction} >Spanish</DropdownItem>
		  <DropdownItem divider />
          <DropdownItem onClick= {this.myFunction} >Chinese</DropdownItem>
		  <DropdownItem divider />
          <DropdownItem onClick= {this.myFunction} >French</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}