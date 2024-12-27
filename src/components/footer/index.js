import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import Header from "../header/header";
import Logo3 from '../../assets/logo batman.jpg'








function Footer (){
    return(
        
          <footer>
              
             <nav class="footer-navigation">
                  <ul class ="footer-list">
                     
                      <Link style={{textDecoration: 'none'}} to='/'>
                         <li>Home</li>
                       </Link>
                     
                        <Link  style={{textDecoration: 'none'}}  to= '/contato'>
                          <li>Contato</li>
                        </Link>
                     
                        <Link  style={{textDecoration: 'none'}}  to='/fotos'>
                         <li>Fotos</li>
                       </Link>
                     
                       <Link  style={{textDecoration: 'none'}} to= '/comentarios'>
                         <li>Comentários</li>
                      </Link>       
                        
           

                  </ul>
             <Header/>
                 <img id="logo3" src={Logo3}  alt=""/>
              </nav>
          </footer>

            
          
        
    )
}


export default Footer;