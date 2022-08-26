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
      {/* <div className='proyectos'> */}
        {/* <h1>Proyectos</h1>
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
        </div> */}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="#!" data-toggle="modal" data-target="#exampleModal">
      <img src="https://concepto.de/wp-content/uploads/2018/09/oc%C3%A9ano-e1537912445911-800x400.jpg" class="d-block w-100" alt="..."/>
      </a>
    </div>
    <div class="carousel-item">
    <video class="img-fluid" autoPlay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="carousel-item">
      <img src="https://concepto.de/wp-content/uploads/2018/09/oc%C3%A9ano-e1537912445911-800x400.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      </div>
     </div>
    // </div>
  )
}

export default Main