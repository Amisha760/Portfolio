import React from "react";
import "./header.css";
import {Link} from "react-scroll"
function Header(){
     
     const nav_header=document.querySelector(".header");
    const togglebtn=()=>{
        // alert("hello guya");
        nav_header.classList.toggle("active");
    }
     
    return (
      <>
        <header className="header active">
            <h1>Amisha</h1>
            <nav className="navbar">
                <ul className="navbar-list">
                    {/* <Link to="#" className="navbar-link">one</Link>
                    <Link to="#" className="navbar-link">two</Link> */}
                    <Link to="Skill" className="navbar-link" smooth={true} duration={1000}>Skills</Link>
                    <Link to="all_project" className="navbar-link" smooth={true} duration={1000}>Projects</Link>
                    <Link  to="contactme" className="navbar-link" smooth={true} duration={1000}>Contact me</Link>
                </ul>
            </nav>
            <div className="mobile-navbar-btn" onClick={togglebtn}>
            <ion-icon name="menu"className="mobile-nav-icon"></ion-icon>
            <ion-icon name="close"></ion-icon>
            </div>
        </header>
      </>

    );
}

export default Header;