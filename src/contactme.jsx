import React from "react";
import "./contactme.css"
function contactme(){
return (
    <>
    <div className="contactme ">
        <div className="mail">
    <a href = "mailto: abc@example.com" >Click here to Email Me!!</a>
    </div>
    <div className="social-media">
       <h5>Social Media</h5>
        <ul>
        <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
        <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
        </ul>
    </div>
    <div className="coding-platform">
        <h5>Coding Platform ID</h5>
 <a href=""><img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/leetcode_logo_icon_145113.png" height={"40px"} width={"40px"}></img></a>
 <a href=""><img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/hackerrank_logo_icon_145206.png" height={"40px"} width={"40px"}></img></a>
 <a href=""><img src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png" height={"40px"} width={"40px"}></img></a>
    </div>
             </div>
    </>
)
}
export default contactme;