import React from "react";
import styles from "./AllTech.module.css"
const AllTech = ({setOpenWindow}) =>{
    const handlerCloseWindow = () =>{
        setOpenWindow(false)
    }
    return(
        <div className={styles.container_allTech}>
            <div className={styles.alltech}>Otras tecnologías vistas:</div>
            <div className={styles.close} onClick={handlerCloseWindow}>X</div>
            <img className={styles.img1} src="https://community.nodemailer.com/wp-content/uploads/2016/01/cropped-n2.png"
            alt="nodemailer" key="nodemailer"/>
            <img className={styles.img2} src="https://s3.amazonaws.com/awsmp-logos/cloudinary.png"
            alt="cloudinary" key="cloudinary"/>
            <img className={styles.img3} src="https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg"
            alt="Redux-toolkit" key="Redux-toolkit"/>
            <img className={styles.img4} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png"
            alt="SQlite" key="SQlite"/>
            <img className={styles.img5} src="https://camo.githubusercontent.com/423664f678fc08582fa8c2e5999d6eef9225631dcac55e3b3a66a90a0edb6bf7/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f657870726573732d3130392e737667"
            alt="express" key="express"/>
            <img className={styles.img7} src="https://cdn.worldvectorlogo.com/logos/nodemon.svg" alt="nodemon" key="nodemon"/>
            <img className={styles.img8} src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="router-dom" key="router-dom"/>
            <img className={styles.img9} src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
            alt="axios" key="axios"/>
            <img className={styles.img10} src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" alt="next" key="next"/>
            <img className={styles.img11} src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="node.js" key="node.js"/>
            <img className={styles.img12} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="javascrip" key="javascript"/>
            <img className={styles.img13} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" key="react"/>
            <img className={styles.img14} src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" key="redux"/>
            <img className={styles.img15} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" alt="redux" key="redux"/>
        </div>
    )
}
export default AllTech;