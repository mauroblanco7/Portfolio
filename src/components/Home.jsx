import React from 'react'
import "./home.css"
import Top from './Top'
import Main from './Main'
import {motion} from "framer-motion"
import LogoMauro from './LogoMauro'
import Fs from "./Fs"

function Home() {
 
  return (
    <>
    <motion.div 
    initial={{x: "200vw"}}
            animate={{x:"0", transition: {duration:1, ease:'easeInOut'}}} class= 'home'>
      <Top/>
      <Main/>
      
      </motion.div>
     
      </>
  )
}

export default Home