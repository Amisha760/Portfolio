import React from "react";
import "./About.css"
import logo from "./img/resume.png"
function About(){
return (
    <>
    <div className="About">
        <div className="left">
    <p className="heading">Hi,I'm Amisha</p>
    <p className="content">hi ! my name is amisha .I am doing my bachelors engineering from chitkara university and my spcialiszation in computer science engineering.
 achievements
i have deep intrest in development and i have made several projects  using html css express ,api </p>
       <a  className="download" href={logo} download>
       <button >Download CV</button>
      </a>
    </div>
    <div className="right">
        <img src="https://i.pinimg.com/236x/cb/df/e9/cbdfe9f0bc9b368b9cb99c6db3bcee14.jpg" width={"240"} height={"400"}></img>
    </div>
    </div>
    </>
);
}
export default About;