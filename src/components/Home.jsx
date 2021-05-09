import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"
export default function Home (props) {
    return(
    <div>
        <Link to='/'>
             <nav>Inicio</nav>
        </Link>
        </div>
    )
}