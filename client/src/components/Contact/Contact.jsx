import React from "react";
import Swal from "sweetalert2"
import style from "./Contact.module.css"
import { useState } from "react";
import axios from "axios"

const Contact = () =>{
    const initialFormState = {
        name: "",
        last_name: "",
        email: "",
        comment: "",
      };
    const [validation, setValidation] = useState("")
    const [form, setForm] = useState(initialFormState)

const handlerChange = (e) =>{
    const {name, value, files} = e.target;
    if(name === "name"){
        if(!value.match("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$")){
            setValidation("Debe ingresar un nombre valido")
        }else{
            
            setValidation("")
        }
    }
    if(name === "last_name"){
        if(!value.match("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$")){
            setValidation("Debe ingresar un apellido valido")
        }else{
            setValidation("")
        }
    }
    if(name === "email"){
        if(!value.match("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")){
            setValidation("Debe ingresar un email valido")
        }else{
            setValidation("")
        }
    }
    if(name === "comment"){
        if(value === ""){
            setValidation("El campo comentario, no puede estar vacio.")
        }else{
            setValidation("")
        }
    }
   
    if(name === "file"){
        setForm({
            ...form,
            [name]: files[0]
        })
    }else{
        setForm({
            ...form,
            [name]: value
        })
    }
    
}
const handlerSubmit = async (e) =>{
    e.preventDefault()
    if(validation === "" && form.name !== "" && form.last_name !== "" && form.email !== "" && form.comment !== ""){

    
   try {
    const post = await axios.post("/contact" ,form, {
        headers: {
          "Origin": "*"
        }
      })
    setForm(initialFormState)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su consulta se envio con éxito',
            showConfirmButton: false,
            timer: 2500
          })
   } catch (error) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ocurrio un problema',
        showConfirmButton: false,
        timer: 2500
      })
      console.log({message: error.message});
   }
}else if(validation !== ""){
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: validation,
        showConfirmButton: false,
        timer: 2500
      })
}else{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Debe ingresar los valores correspondientes",
        showConfirmButton: false,
        timer: 2500
      })
}
    
        
    
      

    
}

console.log(form);
    return(
        <div  className={style.container}>
          
            <h2 className={style.title}>Contacto</h2>
          
            <div className={style.container_form}>
                <h2>¿Te gustaría contactarte conmigo?</h2>
                <form onSubmit={(e)=>handlerSubmit(e)}>
                    <label>Nombre</label>
                    <input onChange={handlerChange} value={form.name} name="name" type="text"></input>
                    <label >Apellido</label>
                    <input onChange={handlerChange} value={form.last_name} name="last_name" type="text"></input>
                    <label>Email</label>
                    <input onChange={handlerChange} value={form.email} name="email" type="email"></input>
                    <label>Comentario</label>
                    <textarea onChange={handlerChange} value={form.comment} name="comment" className={style.textarea}></textarea>
                  
                    
                    <button className={style.button_submit} type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg><span>Enviar</span></button>
<div className={style.validation}><div>{validation}</div></div>
                </form>
                {/* <div className={style.container_contact}>
                <a href="mailto:carusodiegod@gmail.com" rel="noreferrer" target="_blank"> <div className={style.email}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg><span>Mi correo</span>
                </div></a>
                <a href="https://github.com/Diegoc24" rel="noreferrer" target="_blank"> <div className={style.github}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg><span>Mi Github</span>
                </div></a>
                <a href="https://www.linkedin.com/in/diego-caruso-433864237/" rel="noreferrer" target="_blank"><div className={style.linkedin}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
<span>Mi Linkedin</span>
                </div></a>
                </div>*/}
            </div> 
        </div>
    )
}

export default Contact;