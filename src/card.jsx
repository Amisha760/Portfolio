import "./project.css"
function card(props){
return(
<div className="card">
<img src={props.imgsrc} width="300px" height={"200px"} ></img>
  <div className="container">
    <h4 className="name_card"><b>{props.name}</b></h4> 
    <p>{props.desc}</p> 
    <button className="card_btn"><a href={props.link}>Github Link</a></button>
  </div>
</div>
);
}
export default card