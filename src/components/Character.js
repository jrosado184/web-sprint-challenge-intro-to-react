// Write your Character component here
import App from "../App"
import styled from "styled-components";
import '../App.css';


const StyledCharacters = styled.div`
display: flex;
justify-content: flex-start;
color: white;;
padding: 4%;

`






const Character = (prop) => {
    return (
        <div className="container">
      <StyledCharacters style={{color: 'black'}} >
        <button className="btn">{prop.info.name}</button>
        </StyledCharacters>
        </div>
    )
}

export default Character

