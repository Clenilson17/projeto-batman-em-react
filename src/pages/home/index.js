import React from "react";
import Header from '../../components/header/header';
import './styles.css';
import video from '../../assets/video.mp4';
import Cards from "../../components/cards/indesx";
import SpanHome from "../../components/span-home";
import Footer from "../../components/footer";














function Home(){

  return(
    <>
       <Header  />
      <div id="banner"></div>
      <div id="trailer-container">
        <div className="content">
          <video controls className="trailer">
             <source src={video }/>
             Seu navegador não possui suporte para videos
          </video>
        
          <div id="sinopse">
            <p className="description">
            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
            mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
            como a personificação da vingança para a população.
            </p>
            <button className="button">comprar ingresso</button>

          </div>

        </div>
     </div>

      <Cards/>
       <Footer/>
      <SpanHome />
        
        

    </>
        
    
    
  )
     
           
          
}

export default Home;


  

