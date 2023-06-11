import React from "react";
import styles from "./Proyects.module.css"
import rise_talk from "../../images/principalLogo.png"
import videogames from "../../images/icono.png"
const Proyects = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.img_background}>
                <img src="https://az.genial.ly/users/58d52238f8583111a450ea0f/5b0bde56724fd96681783931/5b0bdee244cc391fbc8c31ca/6c801796-6c40-4ed1-8274-e418626c2c0f.png"
                alt="image_background" key="image_background"/>
            </div>
            <div >
            <span className={styles.container_rise_talk}>
                <div className={styles.rise_talk_title}>Store en venta de cursos</div>
                <div className={styles.rise_talk_description}>Esta plataforma fue creada en conjunto con un equipo en el que se utilizó el método scrum, la misma, trata de una plataforma que se encarga de la venta
de cursos de manera online, se utilizaron tecnologías como Next.js, Redux Toolkit, Express, entre muchas
 otras.</div>
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
            </span>
            </div>
            <div>
                <span className={styles.container_videogames}>
                    <div className={styles.videogame_title}>Sitio de Videojuegos</div>
                    <div className={styles.videogame_description}>Esta es una plataforma que fue creada con la única intención de tener la capacidad
de poder observar, manipular y crear nuevos juegos dentro de la misma, se utilizan
tecnologias como React, Redux, Node.js, Express, entre otras tecnologías.
                    </div>
                    <img src={videogames} alt="videogames" key="videogames"/>
                    <span className={styles.text_videogame}>Videogames</span>
                    <a href="https://deploy-beta-seven.vercel.app/" rel="noreferrer" target="_blank">
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
                </span>
            </div>
            

           
        </div>
    )
}

export default Proyects;