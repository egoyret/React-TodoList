import React from "react";

import "./CardTodo.css"
export default function CardTodo (props){
  return(
    <div className="cardTodo">
      <div className="btn-caja">
        <button onClick={props.onClose} className="btn">X</button>
      </div>
      
       
       <h5 className="h5-txt">{props.texto}</h5>

       
    </div>

    )



    
}