import React from "react";
import { useRef } from "react";
import { db } from "../firebase";


const Encuesta = () => {
    const emailRef = useRef();
    // const email = document.querySelector("#email");
    const icon1Ref = useRef();
    const icon2Ref = useRef();
    const errorRef = useRef();

    const btnRef = useRef();
    const postRef = useRef();
    const widgetRef = useRef();

    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    function handleEmailChange(e){
        if (emailRef.current.value.match(regExp)) {
            emailRef.current.style.borderColor = "#27ae60";
            emailRef.current.style.background = "#eafaf1";
            icon1Ref.current.style.display = "none";
            icon2Ref.current.style.display = "block";
            errorRef.current.style.display = "none";
            // btnEmail.style.display = "block";
         } else {
            emailRef.current.style.borderColor = "#e74c3c";
            emailRef.current.style.background = "#fceae9";
            icon1Ref.current.style.display = "block";
            icon2Ref.current.style.display = "none";
            errorRef.current.style.display = "block";
            // btnEmail.style.display = "none";
         }
         if (emailRef.current.value == "") {
            emailRef.current.style.borderColor = "lightgrey";
            emailRef.current.style.background = "#fff";
            icon1Ref.current.style.display = "none";
            icon2Ref.current.style.display = "none";
            errorRef.current.style.display = "none";
            // btnEmail.style.display = "none";
         }
    }
    
      // const editBtn = document.querySelector(".edit");
      function handleButtonClick(e){
        widgetRef.current.style.display = "none";
        postRef.current.style.display = "block";
        return false;
    }

    return (
        <div className="content">
            <header>Ingresa tu e-mail</header>
            <form action="#">
                <div className="field">
                    <input onChange={(e) => { handleEmailChange(e) }} id="email" type="text" autoComplete="off" placeholder="correo@ejemplo.com" ref={emailRef} />
                    <div className="icons">
                        <span className="icon1 fas fa-exclamation" ref={icon1Ref}></span>
                        <span className="icon2 fas fa-check" ref={icon2Ref}></span>
                    </div>
                </div>
                <div className="error-text" ref={errorRef}>
                    Ingresa un e-mail válido
                </div>
                {/* <!-- <button className="btn-email">Enviar</button> --> */}
            </form>

            <div className="container">
                <div className="header">
                    <h1>¿Qué tan satisfecho estás con la experiencia de nuestros servicios?</h1>
                </div>
                <div className="post" ref={postRef}>
                    <div className="text">Gracias por tu opinion!</div>
                    {/* <!-- <div className="edit">EDIT</div> --> */}
                </div>
                <div className="star-widget" ref={widgetRef}>

                    <input type="radio" name="rate" id="rate-5" />
                    <label htmlFor="rate-5" className="fas fa-star" id="label-5"></label>
                    <input type="radio" name="rate" id="rate-4" />
                    <label htmlFor="rate-4" className="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-3" />
                    <label htmlFor="rate-3" className="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-2" />
                    <label htmlFor="rate-2" className="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-1" />
                    <label htmlFor="rate-1" className="fas fa-star" id="label-1"></label>

                    <form action="#">
                        <header></header>

                        <div className="textarea">
                            <textarea cols="30" placeholder="Describe tu experiencia..."></textarea>
                        </div>

                        <div className="btn" onClick={(e) => { handleButtonClick(e) }} ref={btnRef}>
                            <button className="btn-stars" type="submit">Enviar</button>
                        </div>

                    </form>

                </div>

            </div>
        </div>

    )
}

export default Encuesta;