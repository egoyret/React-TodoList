import React, { useState } from "react";



export default function ToDos ({onSearch}){
    const [tarea, setTarea] = useState("")
 
    return(
        <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            
            onSearch(tarea) 
            setTarea("")}}>
            <input type="text" 
            placeholder="Coloca tu nueva tarea..."
            
            value={tarea}
            onChange={e => setTarea(e.target.value)}
            />

            <button >Agregar</button>

        </form>
        </div>

    )
}
