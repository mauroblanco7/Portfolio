import React from 'react'
import "./Main.css"
import reactLogo from '../assets/react.svg'
import viteLogo from "/vite.svg"
import bootstrapLogo from "../../Logos/bootstrap-4.svg"
import jsLogo from "../../Logos/logo-javascript.svg"
import expressLogo from "../../Logos/express.svg"
import nodejsLogo from "../../Logos/nodejs-icon.svg"
import postgreLogo from "../../Logos/postgresql.svg"
import reduxLogo from "../../Logos/redux.svg"
import figmaLogo from "../../Logos/figma-1.svg"
import ReactPlayer from 'react-player'
import videodogs from "../assets/DogsAPP2.mp4"
import videoBusPack from "../assets/Buspack2.mp4"
import videoPokedex from "../assets/Pokedex.mp4"
import videodPunto from "../assets/PUNTO VIAJES.mp4"
import { useModal } from "../Hooks/useModal";
import Modal from "./Modal";
import Form from "./Form"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function Main() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  return (
    <div class="container-main" >
     <motion.div
     initial={{y: "200vh"}}
     animate={{y:"0", transition: {duration:3.5, ease:'easeInOut'}}} 
      className='sidebar'>
     <div class="container singleCol">
        <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Competencias
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>Adaptabilidad</li>
                    <li>Aprendizaje Agil</li>
                    <li>Curiosidad</li>
                    <li>Trabajo en equipo</li>
                    <li>Creatividad</li>
                    <li>Capacidad Critica</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Tecnologias
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body tecnologias">
                <ul>
                    <li>React JS {" "}
                        <a href="https://reactjs.org" target="_blank">
                          <img src={reactLogo} className="logo-react" alt="React logo" />
                        </a>
                    </li>
                    <li>JavaScript {" "}
                        <a href="https://www.javascript.com/" target="_blank">
                          <img src={jsLogo} alt="JavaScript logo" />
                        </a>
                    </li>
                    <li>Redux {" "}
                        <a href="https://es.redux.js.org/" target="_blank">
                          <img src={reduxLogo} alt="Redux logo" className="logo-react" />
                        </a>
                    </li>
                    <li>Nodejs {" "}
                        <a href="https://nodejs.org/es/" target="_blank">
                          <img src={nodejsLogo} alt="Nodejs logo" />
                        </a>
                    </li>
                    <li>PostgreSQL {" "}
                        <a href="https://www.postgresql.org/" target="_blank">
                          <img src={postgreLogo} alt="PostgreSQL logo" />
                        </a>
                    </li>
                    <li>Sequelize {" "}
                        <a href="https://sequelize.org/" target="_blank">
                          <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="PostgreSQL logo" />
                        </a>
                    </li>
                    <li>Bootstrap {" "} 
                        <a href="https://getbootstrap.com/" target="_blank">
                          <img src={bootstrapLogo} alt="Bootstrap logo" />
                        </a>
                    </li>
                    <li>Vite {" "} 
                        <a href="https://vitejs.dev/" target="_blank">
                          <img src={viteLogo} alt="Vite logo" />
                        </a>
                    </li>
                    <li>Figma {" "} 
                        <a href="https://www.figma.com/" target="_blank">
                          <img src={figmaLogo} alt="Figma logo" />
                        </a>
                    </li>
                    <li>Git {" "}
                        <a href="https://git-scm.com/" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/4494/4494748.png" alt="Git logo" />
                        </a>
                    </li>
                    <li>Express {" "}
                        <a href="https://expressjs.com/es/" target="_blank">
                          <img src={expressLogo} class="ex" alt="Express logo" />
                        </a>
                    </li>
                    <li>CSS3 {" "}
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"  alt="CSS logo" />
                        </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Educacion
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <div class="educacion educacion1 ">
                  <h6>2022</h6>
                  <h4>FULL-STACK DEVELOPER</h4>
                  <p>Soy Henry</p>
                 </div>
                 <div class="educacion ">
                  <h6>2016</h6>
                  <h4>BACHILLER EN INFORMATICA</h4>
                  <p>Esc. de Comercio Martin Zapata</p>
                 </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Idiomas
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <div class="educacion ">
                  <a href="https://www.efset.org/cert/n3bbaF" target="_blank">
                  <h6>2022</h6>
                  <h4>Ingl??s: B2 - Upper intermediate. (EF SET).</h4>
                  </a>
                 </div>
                </div>
              </div>
            </div>
          </div>
      </div> 
     </motion.div>
     <motion.div 
     initial={{x: "200vw"}}
     animate={{x:"0", transition: {duration:3.5, ease:'easeInOut'}}} 
     className='content'>
      <div className='about'>
      <h3>Sobre mi</h3>
      <p>Full Stack Developer con experiencia trabajando en NodeJS, React, Redux, SQL entre otras tecnolog??as del sector.
          Interesado en el aprendizaje continuo, curioso a la hora de investigar y aprender sobre nuevas tecnolog??as e innovaciones. 
          Y en b??squeda de nuevos desaf??os para seguir creciendo.
      </p>
      </div>
  <div className='proyectos'>
    <h3>Proyectos y experiencias</h3>
      {/* --Carousel */}
<div id="carouselExampleDark" class="carousel carousel-dark slide"  data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" pause="hover" >
      <img src="https://media.discordapp.net/attachments/1009230548125888533/1013176360417624204/Buspack_Travel_-_Brave_16_8_2022_3_07_55_p._m._2.png?width=884&height=409" class="d-block w-100" onClick={openModal1} alt="BusPack"/>
      <div class="carousel-caption">
        <h5>BusPack</h5>
      </div>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
      <video class="img-fluid" controls loop muted >
        <source src={videoBusPack} type="video/mp4" />
      </video>
        <h3>BusPack</h3>
        <p>Henry Bootcamp, Buenos Aires, Argentina / Trabajo Grupal</p>
        <h5>Puesto</h5>
        <p>Full Stack Web Developer</p>
        <h5>Tareas</h5>
        <p>
        Dise??ar y desarrollar una App para la compra de paquetes tur??sticos pre-armados que inclu??a: Login(firebase), pasarela de pagos (Stripe), carrito de compras, y un panel de admin para crear paquetes.
        Desarrollar la app en React-Redux con estilos en Bootstrap. Back desarrollado en Node. Base de datos en PostgreSQL y Sequelize.
        Se utilizo la metodolog??a SCRUM para el trabajo en equipo.
        </p>
        <div>
        <h5>Repositorio</h5>
        <a href="https://github.com/Wal-Hernandez/PF-grupo-09" target="_blank">
          <p>https://github.com/Wal-Hernandez/PF-grupo-09</p>
        
        </a>
        <h5>Deploy</h5>
        <p>
        <a href="https://travelbus-henry-96a9maamc-wal-hernandez.vercel.app/" target="_blank">
        https://travelbus-henry-96a9maamc-wal-hernandez.vercel.app/
        </a>
        </p>
     
        </div>
        <div>
          <h5>Tecnologias utilizadas</h5>
          <div className='modal-tecnologias'>
    
                    <li>
                        <a href="https://reactjs.org" target="_blank">
                          <img src={reactLogo} className="logo-react" alt="React logo" />
                        </a>
                        React JS {" "}
                    </li>
                    <li>
                        <a href="https://www.javascript.com/" target="_blank">
                          <img src={jsLogo} alt="JavaScript logo" />
                        </a>
                        JavaScript {" "}
                    </li>
                    <li>
                        <a href="https://es.redux.js.org/" target="_blank">
                          <img src={reduxLogo} alt="Redux logo" className="logo-react" />
                        </a>
                        Redux {" "}
                    </li>
                    <li>
                        <a href="https://nodejs.org/es/" target="_blank">
                          <img src={nodejsLogo} alt="Nodejs logo" />
                        </a>
                        Nodejs {" "}
                    </li>
                    <li>
                        <a href="https://www.postgresql.org/" target="_blank">
                          <img src={postgreLogo} alt="PostgreSQL logo" />
                        </a>
                        PostgreSQL {" "}
                    </li>
                    <li>
                        <a href="https://getbootstrap.com/" target="_blank">
                          <img src={bootstrapLogo} alt="Bootstrap logo" />
                        </a>
                        Bootstrap {" "} 
                    </li>

          </div>
        </div>
      </Modal>
    </div>
    <div class="carousel-item">
      <img src="https://media.discordapp.net/attachments/1009230548125888533/1013173907005649056/React_App_-_Brave_16_8_2022_7_45_19_p._m._2.png?width=881&height=409" class="d-block w-100" onClick={openModal2} alt="Dogs App"/>
      <div class="carousel-caption ">
        <h5>Dogs App</h5>
      </div>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <video class="img-fluid" controls loop muted >
        <source src={videodogs} type="video/mp4" />
      </video>
        <h3>Dogs App</h3>
        <p>Henry Bootcamp, Buenos Aires, Argentina</p>
        <h5>Puesto</h5>
        <p> Full Stack Web Developer</p>
        <h5>Tareas</h5>
        <p>
          Dise??ar y desarrollar una App donde podras encontrar todas las razas de perros, filtrarlos, ordenarlos y crear nuevas razas. Se utilizo una API para obtener los datos 
          La app se desarrollo en React-Redux con estilos en CSS puro.
          Backend desarrollado en Nodejs. 
          Base de datos en PostgreSQL y Sequelize.
        </p>
        <div>
        <h5>Repositorio</h5>
        <a href="https://github.com/mauroblanco7/DOGS-APP" target="_blank">
          <p>https://github.com/mauroblanco7/DOGS-APP</p>
        
        </a>
        <h5>Deploy</h5>
        <p>Aun no disponible</p>
        </div>
        <div>
          <h5>Tecnologias utilizadas</h5>
          <div className='modal-tecnologias'>
    
                    <li>
                        <a href="https://reactjs.org" target="_blank">
                          <img src={reactLogo} className="logo-react" alt="React logo" />
                        </a>
                        React JS {" "}
                    </li>
                    <li>
                        <a href="https://www.javascript.com/" target="_blank">
                          <img src={jsLogo} alt="JavaScript logo" />
                        </a>
                        JavaScript {" "}
                    </li>
                    <li>
                        <a href="https://es.redux.js.org/" target="_blank">
                          <img src={reduxLogo} alt="Redux logo" className="logo-react" />
                        </a>
                        Redux {" "}
                    </li>
                    <li>
                        <a href="https://nodejs.org/es/" target="_blank">
                          <img src={nodejsLogo} alt="Nodejs logo" />
                        </a>
                        Nodejs {" "}
                    </li>
                    <li>
                        <a href="https://www.postgresql.org/" target="_blank">
                          <img src={postgreLogo} alt="PostgreSQL logo" />
                        </a>
                        PostgreSQL {" "}
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"  alt="CSS logo" />
                        </a>
                        CSS3 {" "}
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML logo" />
                        </a>
                        HTML5 {" "}
                    </li>

          </div>
        </div>
      </Modal>
    </div>
    <div class="carousel-item">
      <img src="https://media.discordapp.net/attachments/1009230548125888533/1013173906376499200/Pokedex_-_Brave_16_8_2022_7_53_36_p._m._2.png?width=875&height=409" class="d-block w-100" onClick={openModal3} alt="Pokedex"/>
      <div class="carousel-caption">
        <h5>Pokedex</h5>
      </div>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
      <video class="img-fluid" controls loop muted >
        <source src={videoPokedex} type="video/mp4" />
      </video>
        <h3>Pokedex</h3>
        <p>Henry Bootcamp, Buenos Aires, Argentina</p>
        <h5>Puesto</h5>
        <p> Full Stack Web Developer</p>
        <h5>Tareas</h5>
        <p>
          Dise??ar y desarrollar una App donde podras encontrar pokemones, filtrarlos, ordenarlos y crear nuevos. Se utilizo una API para obtener los datos 
          La app se desarrollo en React-Redux con estilos en CSS puro.
          Backend desarrollado en Nodejs. 
          Base de datos en PostgreSQL y Sequelize.
        </p>
        <div>
        <h5>Repositorio</h5>
        <a href="https://github.com/mauroblanco7/PI-pokemon-henry" target="_blank">
          <p>https://github.com/mauroblanco7/PI-pokemon-henry</p>
        
        </a>
        <h5>Deploy</h5>
        <p>Aun no disponible</p>
        </div>
        <div>
          <h5>Tecnologias utilizadas</h5>
          <div className='modal-tecnologias'>
    
                    <li>
                        <a href="https://reactjs.org" target="_blank">
                          <img src={reactLogo} className="logo-react" alt="React logo" />
                        </a>
                        React JS {" "}
                    </li>
                    <li>
                        <a href="https://www.javascript.com/" target="_blank">
                          <img src={jsLogo} alt="JavaScript logo" />
                        </a>
                        JavaScript {" "}
                    </li>
                    <li>
                        <a href="https://es.redux.js.org/" target="_blank">
                          <img src={reduxLogo} alt="Redux logo" className="logo-react" />
                        </a>
                        Redux {" "}
                    </li>
                    <li>
                        <a href="https://nodejs.org/es/" target="_blank">
                          <img src={nodejsLogo} alt="Nodejs logo" />
                        </a>
                        Nodejs {" "}
                    </li>
                    <li>
                        <a href="https://www.postgresql.org/" target="_blank">
                          <img src={postgreLogo} alt="PostgreSQL logo" />
                        </a>
                        PostgreSQL {" "}
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"  alt="CSS logo" />
                        </a>
                        CSS3 {" "}
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML logo" />
                        </a>
                        HTML5 {" "}
                    </li>

          </div>
        </div>
      </Modal>
    </div>
    <div class="carousel-item">
      <img src="https://media.discordapp.net/attachments/1009230548125888533/1014323335565414480/PUNTO_VIAJES_-_Brave_30_8_2022_8_55_40_p._m._5.png?width=883&height=409" class="d-block w-100" onClick={openModal5} alt="Punto Viajes"/>
      <div class="carousel-caption">
        <h5>Punto Viajes</h5>
      </div>
      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
      <video class="img-fluid" controls loop muted >
        <source src={videodPunto} type="video/mp4" />
      </video>
        <h3>Punto Viajes</h3>
        <p>Proyecto Individual</p>
        <h5>Puesto</h5>
        <p> Frontend Web Developer</p>
        <h5>Tareas</h5>
        <p>
          Dise??ar y desarrollar una App para la empresa Punto Viajes, donde podras encontar diferentes destinos de viajes a traves de la argentina y con una comunicacion directa con el WhatsApp de la empresa para la reserva de paquetes. Este fue mi primer proyecto donde use CSS, y HTML puro.
          (Esta pagina no es la que usa la empresa actualmente)
        </p>
        <div>
        <h5>Repositorio</h5>
        <a href="https://github.com/mauroblanco7/Punto-Viajes-" target="_blank">
          <p>https://github.com/mauroblanco7/Punto-Viajes-</p>
        
        </a>
        <h5>Deploy</h5>
        <p>Aun no disponible</p>
        </div>
        <div>
          <h5>Tecnologias utilizadas</h5>
          <div className='modal-tecnologias'>
    
                    <li>
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"  alt="CSS logo" />
                        </a>
                        CSS3 {" "}
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
                          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML logo" />
                        </a>
                        HTML5 {" "}
                    </li>
          </div>
        </div>
      </Modal>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className='contacto'>
  <button onClick={openModal4}>Contactame {" "}<span class="material-symbols-outlined correo">
mail
</span></button>
  <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <Form></Form>
      </Modal>
     
</div>
      </motion.div>
     </div>
  )
}

export default Main