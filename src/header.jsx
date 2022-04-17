import React from "react";
import "./header.css";
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
                    <a href="#" className="navbar-link">one</a>
                    <a href="#" className="navbar-link">two</a>
                    <a href="#" className="navbar-link">skills</a>
                    <a href="#" className="navbar-link">projects</a>
                    <a href="#" className="navbar-link">Contact me</a>
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