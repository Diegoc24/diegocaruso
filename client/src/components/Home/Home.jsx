


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

            </div>
            </div>
            </section>
          
        </div>
    )
}

export default Home;