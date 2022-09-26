import React from "react";
import './Header.css';
import logo from './Images/keep.png'
import Title from "./Title";
import { useState } from "react";

function Header(){
  const [Tab,setTab] = useState(false);
    function col() {
      setTab(true);
    }
    function colBlur() {
      setTab(false);
    }
  return (
    <div className="Navbar">
      <div className="Menubar">
        <span class="material-symbols-outlined">menu</span>
      </div>
      <div className="Nav-logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="Navbar-heading">
        {/* <Title/> */}
        {/* {tab === "Notes" && <Notes />} */}
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
        <span className="material-symbols-outlined">refresh</span>
        <span className="material-symbols-outlined">width_full</span>
        <span className="material-symbols-outlined">settings</span>
      </div>
      <div className="Navbar-profile">
        <span className="material-symbols-outlined">apps</span>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
    </div>
  );
}
export default Header;