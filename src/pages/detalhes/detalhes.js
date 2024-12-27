import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


function Detalhes(){
   const Params= useParams()
   console.log(Params.id)

   useEffect(()=>{
     
   },[])

    return(
        <div>
          Detalhes
        </div>
    )
}

export default Detalhes;





