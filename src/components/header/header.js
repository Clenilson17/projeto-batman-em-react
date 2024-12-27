import React from "react";
import { Link, } from "react-router-dom";
import './styles.css';
import Logo4 from '../../assets/logo batman.jpg';

















function Header(){
 
    return(
             
        <header> 
               
                <img id="logo4" src= {Logo4}  alt=""/>
              
                <nav>
                    <ul>
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
               </nav>

              
        </header>
         
    )
}



export default  Header  ;



