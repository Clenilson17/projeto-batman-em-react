import React from "react";
import './styles.css';

function Button({name,active,onClick}){
    return(
        <div className="Containerbutton">
            <button onClick ={()=>onClick(20)} className={active ? "button" :'disableButton'}>{name}</button>
            <span>seus dados estão a salvos conosco</span>
        </div>
    )
}

export default Button



