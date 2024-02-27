import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css"
import rise_talk from "../../images/principalLogo.png"
import videogames from "../../images/icono.png"
import ecommerce from "../../images/pixel_port.png"
import dogs from "../../images/dogs.png"
import loading from "../../images/ZKZx.gif"
import ReactPlayer from "react-player"
import videoBartolo from "../../images/Bartolovideo.mp4"
import videoEcommerce from "../../images/Ecommercevideo.mp4"
import videoGames from "../../images/Videogamesvideo.mp4"
import lion from "../../images/logo-leon.png"
const Projects = ()=>{
    const [hoverPixel, setHoverPixel] = useState({style: {opacity: "0%"}, play: false})
    const [hoverGames, setHoverGames] = useState({style: {opacity: "0%"}, play: false})
    const [hoverBartolo, setHoverBartolo] = useState({style: {opacity: "0%"}, play: false})
    
    
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                PROYECTOS
            </div>
            <div className={styles.allProyects}>
                
                <span className={styles.container_ecommerce} 
                onMouseOver={
                    ()=>setHoverPixel({style: {opacity: "100%"}, play: true})} 
                    onMouseOut={()=>setHoverPixel({style: {opacity: "0%"}, play: false})}
                    onClick={()=> setHoverPixel({...hoverPixel, play: !hoverPixel.play})}
                    >
                <div className={styles.muestra1} >
                    <ReactPlayer url={videoEcommerce} controls={true} width={"70vw"} height={"500px"} style={hoverPixel.style} playing={hoverPixel.play}/>
                </div>
                    <div className={styles.ecommerce_title}>E-commerce de VideoJuegos</div>
                    
                    <img src={ecommerce} alt="ecommerce" key="ecommerce"/>
                    <span className={styles.text_ecommerce}>Pixel Port</span>
                    <a href="https://pixel-port.vercel.app/" rel="noreferrer" target="_blank">
                    <span className={styles.svg_enter}>
                    <div>Entrar al sitio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                    </span></a>
                    <div className={styles.svg_container}>
                    <span className={styles.svg_ecommerce_front}>
                    <a style={{textDecoration: "none"}} href="https://github.com/Diegoc24/PF-ECOMMERCE-FRONT" rel="noreferrer" target="_blank">
                   
                    <div>Frontend</div>
                    <svg className={styles.svg_back} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a></span>
<span className={styles.svg_ecommerce_back}>
    <div>Backend</div>
<a href="https://github.com/Diegoc24/PF-ECOMMERCE-BACK" rel="noreferrer" target="_blank">     <svg className={styles.svg_front} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</a>
</span>          </div>
<div className={styles.ecommerce_description}>
                        Es un e-commerce en que se venden videojuegos fisicos, esta plataforma cuenta con metodos de pago,
                        autenticacion de terceros, dashboard, entre muchas otras cosas. 
                        Se utiliza Javascript, React, Redux, Stripe, Node.js, Sequeliza, MongoDB, etc.
                    </div>
                </span>
           
            
            
            
            
            <div>
                <span className={styles.container_videogames} 
                onMouseOver={
                    ()=>setHoverGames({style: {opacity: "100%", position: "absolute"}, play: true})} 
                    onMouseOut={()=> setHoverGames({style: {opacity: "0%", position: "absolute"}, play: false})}
                    onClick={()=> setHoverGames({...hoverGames, play: !hoverGames.play})}
                    >
                
                    <ReactPlayer url={videoGames} controls={true} width={"100%"} height={"100%"} style={hoverGames.style} playing={hoverGames.play}/>
               
                    <div className={styles.videogame_title}>Sitio de Videojuegos</div>
                   
                    <img src={videogames} alt="videogames" key="videogames"/>
                    <span className={styles.text_videogame}>Videogames</span>
                    <a href="https://videogamess.vercel.app/" rel="noreferrer" target="_blank">
                    <span className={styles.svg_enter}>
                    <div>Entrar al sitio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                    </span></a>
                    <a href="https://github.com/Diegoc24/PI-VideoGames" rel="noreferrer" target="_blank">
                    <span className={styles.svg_github}>
                    <div>Ir al repositorio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                    </span></a>
                    <div className={styles.videogame_description}>Esta es una plataforma que fue creada con la única intención de tener la capacidad
de poder observar, manipular y crear nuevos juegos dentro de la misma, se utilizan
tecnologias como React, Redux, Node.js, Express, entre otras.
                    </div>
                </span>
            </div>
            <div>
                <span className={styles.container_bartolo} 
                onMouseOver={
                    ()=>setHoverBartolo({style: {opacity: "100%", position: "absolute"}, play: true})} 
                    onMouseOut={()=> setHoverBartolo({style: {opacity: "0%", position: "absolute"}, play: false})}
                    onClick={()=> setHoverBartolo({...hoverBartolo, play: !hoverBartolo.play})}
                    >
                
                    <ReactPlayer url={videoBartolo} controls={true} width={"100%"} height={"100%"} style={hoverBartolo.style} playing={hoverBartolo.play}/>
                
                    <div className={styles.videogame_title}>Sitio de Senador Nacional</div>
                   
                    <img src={lion} alt="lion" key="lion"/>
                    <span className={styles.text_bartolo}>Bartolo Abdala</span>
                    {/* <a href="https://videogamess.vercel.app/" rel="noreferrer" target="_blank">
                    <span className={styles.svg_enter}>
                    <div>Entrar al sitio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                    </span></a> */}
                    <a href="https://github.com/Diegoc24/PI-VideoGames" rel="noreferrer" target="_blank">
                    <span className={styles.svg_github}>
                    <div>Ir al repositorio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                    </span></a>
                    <div className={styles.bartolo_description}>Este sitio fue creado con la intención
                    que se pueda dar a conocer el senador nacional Bartomé Abdala, se manejan tecnologías como
                    React, Nodemailer, Node, PostgreSQL, SweetAlert2, React-Player, etc.
                    </div>
                </span>
            </div>
            
            <div>
            
            <span className={styles.container_rise_talk}>
                <div className={styles.rise_talk_title}>Store en venta de cursos</div>
                
                <img src={rise_talk} alt="logo_rise_talk" key="logo_rise_talk"/>
                <span className={styles.svg_enter}>
                    <div>Entrar al sitio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                    </span>
                    <a href="https://github.com/Risetalk" rel="noreferrer" target="_blank">
                    <span className={styles.svg_github}>
                    <div>Ir al repositorio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                    </span></a>
                    <div className={styles.rise_talk_description}>Esta plataforma fue creada en conjunto con un equipo en el que se utilizó el método scrum, la misma, trata de una plataforma que se encarga de la venta
de cursos de manera online, se utilizaron tecnologías como Next.js, Redux Toolkit, Express, entre muchas
 otras.</div>
            </span>
            </div>

            
            
            
            <span className={styles.container_dogs}>
                <div className={styles.rise_talk_title}>Sitio de razas de perros</div>
                <div className={styles.rise_talk_description}>Esta es una plataforma que fue creada con la única intención de tener la capacidad
de poder observar datos de los diferentes razas de perros que existen, ademas de poder crear nuevas razas. Dentro de la misma, se utilizan
tecnologias como React, Redux, Node.js, Express, entre otras.</div>
                <img src={dogs} alt="logo_dogs" key="logo_dogs"/>
                <span className={styles.text_dogs}>Dogs</span>
                <span className={styles.desarrollo}>App en desarrollo...
                <img src={loading} alt="gif_loading" key={"gif_loading"}></img></span>
                    <a href="https://github.com/Diegoc24/Pi-Dogs" rel="noreferrer" target="_blank">
                    <span className={styles.svg_github}>
                    <div>Ir al repositorio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                    </span></a>
                    <div className={styles.rise_talk_description}>Esta es una plataforma que fue creada con la única intención de tener la capacidad
de poder observar datos de los diferentes razas de perros que existen, ademas de poder crear nuevas razas. Dentro de la misma, se utilizan
tecnologias como React, Redux, Node.js, Express, entre otras.</div>
            </span> 
            
            </div>
        </div>
    )
}

export default Projects;