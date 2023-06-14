import React from "react";
import styles from "./NavBar.module.css"


const NavBar = () =>{

    const scrollSection = (idsection) =>{
        const section = document.getElementById(idsection)
        if(section){
            section.scrollIntoView({behavior: "smooth"});
        }
    }

    return(
        <div>
        <div className={styles.nav}>
            <div className={styles.container_link}>
            <div className={styles.link} onClick={() => scrollSection("home")}>HOME</div>
            <div className={styles.link} onClick={() => scrollSection("about")}>ABOUT</div>
            <div className={styles.link} onClick={() => scrollSection("projects")}>PROJECTS </div>
            
            <div className={styles.link} onClick={() => scrollSection("contact")}>CONTACT</div>
            <div className={styles.container_git}>
              
            <a href="https://github.com/Diegoc24" rel="noreferrer" target="_blank"> <img src="https://static-00.iconduck.com/assets.00/github-icon-1024x994-4h5sdmko.png" alt="github" className={styles.img_git}/></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/diego-caruso-433864237/" rel="noreferrer" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="linkedin" className={styles.img_linkedin}/></a>
            </div>
            </div>
            
        </div>
        
        
        </div>
    )
}

export default NavBar;