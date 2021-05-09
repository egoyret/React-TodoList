import React from 'react';

import ToDos from './ToDos';
import "./nav.css"

function Nav({onSearch}) {
  return (
    <div className = "todo">
      <p className = "title">Coloque aqui sus tareas pendientes</p>
      <div className = "input">
      <ToDos onSearch ={onSearch}/>
      </div>
    </div>
  );
};

export default Nav;