import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import SpanFotos from "../../components/span-fotos";


function Fotos(){
    return(
      <>
        <Header/>

        <h1>Lista de fotos</h1>
       <div class="actor-cards-container">
          <div class="foto-content">
            <div class="cardf banner4"></div>
            <div class="cardf banner5"></div>
            <div class="cardf banner6"></div>
            <div class="cardf banner7"></div>
            <div class="cardf banner8"></div>
            <div class="cardf banner9"></div>
            <div class="cardf banner10"></div>
            <div class="cardf banner11"></div>
            <div class="cardf banner12"></div>
            <div class="cardf banner13"></div>
          </div>

    
        </div>
          <SpanFotos/>
      </>
    )
}

export default Fotos;