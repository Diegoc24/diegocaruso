


import React from "react"

import style from "./Home.module.css"


const Home = () =>{
    return(
        <div>
           
            <section id="home">
            <div className={style.container}>
            <div>
                <img src="https://media.licdn.com/dms/image/D4D03AQE0jdJnXvBCTg/profile-displayphoto-shrink_800_800/0/1684214267639?e=1691625600&v=beta&t=3X43-nqY9oPEUrK-fGJ297eVaNIIkY49XrC-YgB2qQw" alt="perfil"/>
                <h1>Diego caruso</h1>
                <p>Full-Stack Developer</p>
                <a href={process.env.PUBLIC_URL + '/Diego_Caruso_CV.pdf'} rel="noreferrer" target="_blank"><button className={style.button_cv}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg><span>Ver CV</span></button></a>

            </div>
            </div>
            </section>
          
        </div>
    )
}

export default Home;