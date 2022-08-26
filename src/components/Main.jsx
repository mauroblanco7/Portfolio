import React from 'react'
import "./Main.css"
import reactLogo from '../assets/react.svg'
import viteLogo from "/vite.svg"
import bootstrapLogo from "../../Logos/bootstrap-4.svg"
import jsLogo from "../../Logos/logo-javascript.svg"
import nodejsLogo from "../../Logos/nodejs-icon.svg"
import postgreLogo from "../../Logos/postgresql.svg"
import reduxLogo from "../../Logos/redux.svg"
import figmaLogo from "../../Logos/figma-1.svg"
import ReactPlayer from 'react-player'
import videodogs from "../../dist/assets/videos/dogs app.mp4"

function Main() {
  return (
    <div class="container-main" >
     <div className='sidebar'>
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
                  <a href="https://www.efset.org/es/ef-set-50/take-test/#set50-131/result" target="_blank">
                  <h6>2022</h6>
                  <h4>Inglés: B2 - Upper intermediate. (EF SET).</h4>
                  </a>
                 </div>
                </div>
              </div>
            </div>
          </div>
      </div> 
     </div>
     <div className='content'>
      <div className='about'>
      <h3>Sobre mi</h3>
      <p>Full Stack Developer con experiencia trabajando en NodeJS, React, Redux, SQL entre otras tecnologías del sector.
          Interesado en el aprendizaje continuo, curioso a la hora de investigar y aprender sobre nuevas tecnologías e innovaciones. 
          Y en búsqueda de nuevos desafíos para seguir creciendo.
      </p>
      </div>
      <div className='proyectos'>
        <h1>Proyectos</h1>
        <div className='proyecto'>
        <h3>Henry Bootcamp, Buenos Aires, Argentina.</h3>
        <h2>Full Stack Web Developer - BUSPACK (trabajo grupal)</h2>
        <ul>
          <li><p>Diseñar y desarrollar una App para la compra de paquetes turísticos pre-armados que incluía: Login(firebase), pasarela de pagos (Stripe), carrito de compras, y un panel de admin para crear paquetes</p></li>
          <li><p>Desarrollar la app en React-Redux con estilos en Bootstrap. Back desarrollado en Node. Base de datos en PostgreSQL y Sequelize.
               Se utilizo la metodología SCRUM para el trabajo en equipo.</p></li>
        </ul>
        </div>
        <div class="video">
        <ReactPlayer
        url={videodogs}
        controls
        loop
        height="20%"
        />
        </div>


      </div>
     </div>
    </div>
  )
}

export default Main