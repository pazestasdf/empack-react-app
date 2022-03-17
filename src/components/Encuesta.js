import React from "react";
import { useRef } from "react";
import logo from '../resources/empack-logo.png'
import { db } from "../firebase";


const Encuesta = () => {

    // const emailRef = useRef();
    // // const email = document.querySelector("#email");
    // const icon1Ref = useRef();
    // const icon2Ref = useRef();
    // const errorRef = useRef();

    const btnRef = useRef();
    const postRef = useRef();
    const widgetRef = useRef();
    const surveyValueRef = useRef();
    const questionHeaderRef = useRef();

    // let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    // function handleEmailChange(e){
    //     if (emailRef.current.value.match(regExp)) {
    //         emailRef.current.style.borderColor = "#27ae60";
    //         emailRef.current.style.background = "#eafaf1";
    //         icon1Ref.current.style.display = "none";
    //         icon2Ref.current.style.display = "block";
    //         errorRef.current.style.display = "none";
    //         // btnEmail.style.display = "block";
    //      } else {
    //         emailRef.current.style.borderColor = "#e74c3c";
    //         emailRef.current.style.background = "#fceae9";
    //         icon1Ref.current.style.display = "block";
    //         icon2Ref.current.style.display = "none";
    //         errorRef.current.style.display = "block";
    //         // btnEmail.style.display = "none";
    //      }
    //      if (emailRef.current.value == "") {
    //         emailRef.current.style.borderColor = "lightgrey";
    //         emailRef.current.style.background = "#fff";
    //         icon1Ref.current.style.display = "none";
    //         icon2Ref.current.style.display = "none";
    //         errorRef.current.style.display = "none";
    //         // btnEmail.style.display = "none";
    //      }
    // }
    
      // const editBtn = document.querySelector(".edit");
      function handleButtonClick(e){
        getSurveyValue();
        widgetRef.current.style.display = "none";
        questionHeaderRef.current.style.display = "none";
        postRef.current.style.display = "block";
        return false;
    }
    function getSurveyValue(){
        // const surveyValue = surveyValueRef.current;
        const surveyValue = document.querySelector("#survey-value");
        var style = window.getComputedStyle(surveyValue, ":before");
        var textContent = style["content"];
        var date = new Date();
        var data = {
            date: date.toISOString().slice(0, 10), 
            response: textContent.replaceAll("\"", ""),
        }
        db.collection("empack-encuesta").add(data).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        })
    }

    return (
        <div className="content">
            <div className="logo-img">
            <img src={logo} alt="empack-logo"/>
            </div>
            {/* <header>Ingresa tu e-mail</header> */}
            {/* <form action="#">
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
            </form> */}

            <div className="container">
                <div className="header" ref={questionHeaderRef}>
                    <h2>Porque nos interesa ir mejorando
                        <br />Te invitamos a calificar la experiencia que tuviste con nuestro sitio web ecommerce.</h2>
                    
                <h3 className="pregunta">¿Cuál sería la probabilidad de volver a comprar en el sitio web de Empack Link?</h3>
                </div>
                <div className="post" ref={postRef}>
                    <div className="text">¡Gracias por tus comentarios!<br /> Tu opinión es importante para nosotros. </div>
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
                        <header id="survey-value" ref={surveyValueRef}></header>

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