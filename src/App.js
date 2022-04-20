import React from "react";
import Header from "./header";
import About from "./About";
import Skills from "./skills";
import Project from "./project";
import Data from"./Api";
import Card from "./card"
import "./project.css"


function App(){

 const card=(val)=>{
    return (
<Card
    imgsrc={val.imgsrc}
    name={val.name}
    desc={val.desc}
    link={val.link}
      />
    )
 }
return (
   <>
   <Header/>
    <About/>
    <Skills/>
    <div className="all_project">
    <div className="project_heading">
        Projects
    </div>
    
    { Data.map(card)}
</div>
 

    
   </>

);
}

export default App;