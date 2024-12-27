import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import SpanContato from "../../components/span-contato";




function Contato(){
    return(
      <>
         <Header/>
        <div id='banner4'>
         <label for="name">Nome</label>
         <input id="nome" name="nome" placeholder="coloque seu  nome completo"/>
      
         <label for="email">Email</label>
         <input id="email" name="email" placeholder="e-mail"/>
      
         <label for="contato">Contato</label>
          <input  id="contato" nome="contato" placeholder="+55"/>
          <button className="enviar">Enviar</button>

          <SpanContato/>
        
        </div>
      </>
    )
}

export default Contato;