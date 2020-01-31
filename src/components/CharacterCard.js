import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const CharacterCard = props => {
  return (
    <StyledDiv>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <h3>Status: {props.status}</h3>
      <h3>Species: {props.species}</h3>
    </StyledDiv>
  );
  // ;<span>todo: character</span>;
};

export default CharacterCard;

// styling
const StyledDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
  margin: 20px auto;
  width: 60%;
  border: grey 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  &:hover {
    background-color: skyblue;
  }
  img{
    width:60%;
  }
`;
