// Write your Character component here
import App from "../App"
import styled from "styled-components";
import '../App.css';
import React, { useState } from "react";


const StyledCharacters = styled.div`
display: flex;
justify-content: flex-start;
padding: 2.6%;
`

const Info = styled.p`
color: white;
text-align: left;
padding-left: 2%;
font-size:1.5rem;
`
  const Character = (prop) => {
   
  const [show, setShow] = useState(true);

  const toggleButton = (elem) => {
    setShow(!show)
  }
  
  return (
        <div className="container">
      <StyledCharacters style={{color: 'black'}} >
        <button className="btn" id="toggleButton" onClick={toggleButton}>{prop.info.name} </button>
      <Info>  {show === true ?  `My name is ${prop.info.name},
       I was born in the year ${prop.info.birth_year} , my eye color is
        ${prop.info.eye_color}.I am ${prop.info.height} ft tall and my films are ${prop.info.films}` :  null}</Info>
        </StyledCharacters>
     
        
        </div>
    )
}

export default Character

