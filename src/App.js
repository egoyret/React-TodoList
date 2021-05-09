import './App.css';
import React ,{useState}from 'react';
//Componentes
import { HashRouter, Route } from 'react-router-dom'; 
import Inicio from "./components/inicio.jsx";
import ToDos from "./components/ToDos.jsx";
import Nav from "./components/Nav.jsx"
import Cards from "./components/Cards.jsx";

import Home from "./components/Home.jsx"
// import { useState } from 'react';

function App() {
  
const [tareas, setTareas] = useState([])



const onSearch= task => {
  if(!tareas.find(t => t.texto === task)){
    setTareas(oldTareas => [...oldTareas,{texto : task}])
  }
}

function onClose(texto) {
  let result =window.confirm("¿Ya has completado esta tarea?")
  if(result){
    setTareas(oldTareas => oldTareas.filter(c => c.texto != texto));
  }
}

  return (
    <div className="App">
     <Route 
      exact path="/"
      render={() =>  <Inicio/>}
    />
     <Route 
      path="/ToDo"
      render={() =><Nav onSearch={onSearch}/>}
      /> 
     <Route 
     path="/ToDo"
     render={()=>
    <Cards
      cards ={tareas} onClose = {onClose}
    />}/>

<Route 
     path="/ToDo"
     render={()=><Home/>}/>


{/* Home */}
    </div>
  );
};

export default App;
