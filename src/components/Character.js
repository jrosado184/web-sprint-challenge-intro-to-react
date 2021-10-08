// Write your Character component here
import App from "../App"
import styled from "styled-components";
import '../App.css';


const StyledCharacters = styled.div`
display: flex;
justify-content: flex-start;
padding: 2.6%;
`

const Info = styled.p`
color: white;
text-align: left;
padding-left: 2%;



`





const Character = (prop) => {
    return (
        <div className="container">
      <StyledCharacters style={{color: 'black'}} >
        <button className="btn">{prop.info.name} </button>
        </StyledCharacters>
      <Info>
      <p>Birth Year: {prop.info.birth_year}</p>
        <p>Eye Color: {prop.info.eye_color}</p>
        <p>Films :{prop.info.films}</p>
        <p>Height: {prop.info.height}</p>
        </Info>
        </div>
    )
}

export default Character

