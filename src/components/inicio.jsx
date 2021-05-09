import React from 'react';
import "./inicio.css"
import { Link } from 'react-router-dom';

export default function Inicio (props) {
    return(
    <div>


        <div className= "nav">
        <Link to='/ToDo' className="lin">
             <h3 className="nav--h3">To do</h3>
        </Link>
        </div>


        <div class = 'container projects'>
            <h1>Bienvenid@</h1>
        </div>

        

        
    </div>
    )
}