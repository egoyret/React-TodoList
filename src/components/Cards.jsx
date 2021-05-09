import React from "react";
import "./Cards.css";
import CardTodo from "./CardTodo";

export default function Cards({cards, onClose}) {
return(
    <div className="cards">
    {cards.map((c, index) =><CardTodo
        texto={c.texto}
        // onClose={() =>c.onClose}
        onClose={() => onClose(c.texto)}
        key={index}
        id= {c.texto}
        
    />)}

    </div>
);
}