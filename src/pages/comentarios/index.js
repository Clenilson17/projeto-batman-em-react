import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import SpanComentarios from "../../components/span-comentarios";





function Comentarios(){
   

    return(
        <>
           <Header/>
           <div id='banner14'>

            <h2>Deixe seu comentário</h2>
            <textarea    name="mensagem" id="mensagem" rows="mensagem">
        
            </textarea>

            <button className="enviar2">Enviar</button>

           
           <SpanComentarios/>

           </div>
             

           


           
        </>

        

    )
}

export default Comentarios;