import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LocationCard({ id, name, type, dimension, residents }) {
  return (
    <StyledLocationDiv>
<h4>id:{id}</h4>
      <h1>Name:{name}</h1>
      <h3>Type: {type}</h3>
      <h3>Dimension: {dimension}</h3>
      <h3>resident: {residents}</h3>
    </StyledLocationDiv>
  );
}

// styling
const StyledLocationDiv = styled.div`
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