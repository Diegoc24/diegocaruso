import React, { useState } from "react";
import styles from "./About.module.css";
import image1 from "../../images/1452px-CSS3_logo_and_wordmark.svg.png";
import image2 from "../../images/92065800-865a-11eb-9626-dff3cb7fef55.png";
import image3 from "../../images/JavaScript-logo.png";
import image4 from "../../images/nextjs-icon-512x512-11yvtwzn.png";
import image5 from "../../images/react-1-logo-png-transparent.png";
import AllTech from "../AllTech/AllTech";
import ReactPlayer from "react-player";
import {useInView} from "react-intersection-observer"
import videoPerfil from "../../images/videoPerfil.mp4"

const About = () => {
  const images = [image1, image2, image3, image4, image5];
  const [openWindow, setOpenWindow] = useState(false)
  const [ref, inView] = useInView({
    rootMargin: "-50% 70%"
  })
 const handlerOpenWindow = ()=>{
    setOpenWindow(true)
 }

  return (
    <div
      className={styles.container}
      
    >
      {/* <div>
        <img
          className={styles.image_about}
          src="https://static.vecteezy.com/system/resources/previews/011/153/363/original/3d-web-developer-working-on-project-illustration-png.png"
          alt="image_about"
        />
      </div> */}
      <div className={styles.text_about}>
        <h3>
        ¡Hola! Soy programador full-stack, poseo gran curiosidad por la tecnología desde muy chico, 
        desde mis 14 años que reparo computadoras y a mis 18 años estudie por mi cuenta tecnologías
        como HTML 5, CSS y JavaScript, también cree algunos sitios para negocios cercanos, actualmente
        termine de cursar en Henry, donde aprendí tecnologías como Javascript, React, Node.js, Postgres, entre muchas otras.</h3>
        <h3>Me puedo adaptar a los diferentes lenguajes y herramientas con gran facilidad. Me encanta 
        la tecnología y la programación, soy una persona organizada, cuando se trata de trabajar en grupo.
        </h3>
        <h3>
        Una de las cosas que aprendí a lo largo de mi vida es que de los errores uno aprende,
        mejora como persona y también como profesional.
        </h3>
      </div>
      <div className={styles.muestraVideo} ref={ref}>
        <ReactPlayer url={videoPerfil} width={"100%"} height={"100%"} controls={true} playing={inView}/>
      </div>
      <div className={styles.all}>
      <div className={styles.tech}>
      <span style={{ '--i': 1 }}><img className={styles.img1} src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" alt="next" key="next"/></span>
      <span style={{ '--i': 2 }}><img className={styles.img2} src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="node.js" key="node.js"/></span>
      <span style={{ '--i': 3 }}><img className={styles.img3} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="javascrip" key="javascript"/></span>
      <span style={{ '--i': 4 }}><img className={styles.img4} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" key="react"/></span>
      <span style={{ '--i': 5 }}><img className={styles.img5} src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" key="redux"/></span>
      <span style={{ '--i': 6 }}><img className={styles.img5} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" alt="redux" key="redux"/></span>
      </div>
      </div>
      <h2>6 de las tecnologías más utilizadas</h2>
      <div>
        {openWindow ? <div className={styles.container_allTech}><AllTech setOpenWindow={setOpenWindow}/></div> : <div></div>}
      </div>
        <div className={styles.containerButton}>
        <button className={styles.boton} onClick={()=> handlerOpenWindow()}>
            <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
</svg>
            </span>
           <span className={styles.boton_tech}>Todas las tecnologías</span>
        </button>
        </div>
    </div>
  );
};

export default About;
