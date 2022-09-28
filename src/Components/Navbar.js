import React from "react";
import './Header.css';
import logo from './Images/keep.png'
import { useState } from "react";

function Header(props){
  const [Tab,setTab] = useState(false);

function col(){
  setTab(true);
}
function colBlur(){
  setTab(false)
}
const icons = ['refresh','width_full','settings'];
const profile_icons = ['apps','account_circle']
  return (
    <div className="Navbar">
      <div className="Menubar">
        <span class="material-symbols-outlined" onClick={props.toggleActiveState}>menu</span>
      </div>
      <div className="Nav-logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="Navbar-heading">
      </div>
      <div className="Navbar-Search">
        <div
          className={`Navbar-search-01 ${Tab ? "active" : ""}`}
          id="Nav-search"
          onFocus={col}
          onBlur={colBlur}
        >
          <div className={`Navbar-search-icon ${Tab ? "active-icon" : ""}`}>
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="Navbar-input">
            <input type="text" placeholder="Search" id="Nav-input"></input>
          </div>
        </div>
      </div>
      <div className="Navbar-more-icons">
        {icons.map(data=>{
          return(
            <span className="material-symbols-outlined">{data}</span>
          )
        })}
      </div>
      <div className="Navbar-profile">
        {profile_icons.map(data=>{
          return(
            <span className="material-symbols-outlined">{data}</span>
          )
        })}
      </div>
    </div>
  );
}
export default Header;