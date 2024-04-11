import React from "react";
import "./voir.css"
import local from "./local.png"

function voir (props)
{   return(
    <div className="cards">
    <div className='card1'>
    <h1>
        <img src={props.img} className='bobby' alt=""></img>
        {props.name}</h1>
    <h1>
    <img src={local} className='local' alt=""></img>
        {props.local}</h1>
    </div>
    </div>
)

}
export default voir;