import React from 'react'
import {motion} from "framer-motion"

function Top() {
  return (
    <div class='top container'>
        <div class='row names'>
            <motion.div 
               initial={{x: "200vw"}}
               animate={{x:"0", transition: {duration:2.8, ease:'easeInOut'}}} 
               
            
            class="col-12 name">Mauro Blanco</motion.div>
        </div>
        <motion.div 
          initial={{x: "200vw"}}
          animate={{x:"0", transition: {duration:2.9, ease:'easeInOut'}}} 
        class='row fs'>
            <div class="col-12 name name2">Full-stack web developer</div>
        </motion.div>
        <motion.div 
         initial={{y: "200vh"}}
         animate={{y:"0", transition: {duration:3, ease:'easeInOut'}}} 
        class="row redes">
            
            <div class="col-12 col-md-3 links emailm"><a href="https://mail.google.com/" target="_blank"> <div class='ico'><i class="fa-solid fa-envelope"></i></div><p>mauro.blnc.mb@gmail.com</p></a></div>
          
            <div class="col-12 col-md-3 links locationm"><a href="https://www.google.com.ar/maps/place/Plaza+Independencia/@-32.8895526,-68.8470213,17z/data=!3m1!4b1!4m5!3m4!1s0x967e0907b3f6324b:0x501d1521958dfb21!8m2!3d-32.8895571!4d-68.8448326" target="_blank"> <div class='ico'><i class="fa-solid fa-location-dot"></i> </div><p> Mendoza, Argentina</p></a> </div>
            <div class="col-12 col-md-3 links githubm"><a href="https://github.com/mauroblanco7" target="_blank" ><div class='ico'><i class="fa-brands fa-github"></i></div> <p> /mauroblanco7</p></a> </div>
            <div class="col-12 col-md-3 links linkedinm"><a href="https://www.linkedin.com/in/mauroblanco7/" target="_blank"> <div class='ico'><i class="fa-brands fa-linkedin"></i></div> <p>  /mauroblanco7</p></a></div>
        </motion.div>
     
  </div>
  )
}

export default Top