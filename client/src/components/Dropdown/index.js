import React from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default (props)=>{
    return (
      <select className="custom-select" onChange={props.handleChange} >
        <option defaultValue>Select your Language</option>
        <option value={"spanishIds"}>
          Spanish
        </option>
        <option value={"chineseIds"}>
          Chinese
        </option>
        <option value={"frenchIds"}>
          French
        </option>
      </select>
    );
}