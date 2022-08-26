import React from 'react'
import {motion} from "framer-motion"

function Top() {
  return (
    <div class='top container'>
        <div class='row names'>
            <motion.div 
            
            class="col-12 name">Mauro Blanco</motion.div>
        </div>
        <div class='row fs'>
            <div class="col-12 name">Full-stack web developer</div>
        </div>
        <div class="row redes">
            <div class="col-12 col-md-3 links"><div class='ico'><i class="fa-solid fa-envelope"></i></div><p>mauro.blnc.mb@gmail.com</p> </div>
            <div class="col-12 col-md-3 links"><div class='ico'><i class="fa-solid fa-location-dot"></i> </div><p> Mendoza, Argentina</p> </div>
            <div class="col-12 col-md-3 links"><div class='ico'><i class="fa-brands fa-github"></i></div> <p> /mauroblanco7</p> </div>
            <div class="col-12 col-md-3 links"><div class='ico'><i class="fa-brands fa-linkedin"></i></div> <p>  /mauroblanco7</p></div>
        </div>
     
  </div>
  )
}

export default Top