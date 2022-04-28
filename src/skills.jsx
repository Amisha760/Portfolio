import React from "react";
import "./skills.css";
function skills(){
   return(
       <>
         <div className="Skill" >
            <div className="heading_skill">
                My Skills
            </div>
            <br></br>
            <div className="all_skill">
            <div className="skills_left">
                <ul>
                    <h4>Java</h4>
                    <h4>DSA</h4>
                    <h4>Html/CSS</h4>
                    <h4>JavaScript</h4>
                </ul>
            </div>
       
            <div className="line"></div>
            <div className="skills_right">
                <ul>
            <h4>ReactJs</h4>
            <h4>Sql/MySql</h4>
            <h4>Mongodb/Moongoose</h4>
            <h4>ExpressJs</h4>
            </ul>
            </div>
            </div>
         </div>
       </>
   );
}
export default skills;