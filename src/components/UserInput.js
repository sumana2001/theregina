import React from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import AddMood from "../firebase/addmood";

const Container=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
max-width:800px;
margin:0 auto;
padding-left:3%;
padding-right:5%;
`

const Button=styled.h1`
  font-size:70px;
  cursor:pointer;
  @media screen and (max-width:768px){
    font-size:50px;
  }
`

export const UserInput = () => {
  const currentUser = useAuth();

  return (
    <>
    <Container>
      <Button onClick={() => AddMood(1, currentUser)}>😞</Button>
      <Button onClick={() => AddMood(2, currentUser)}>🥺</Button>
      <Button onClick={() => AddMood(3, currentUser)}>😶</Button>
      <Button onClick={() => AddMood(4, currentUser)}>🙂</Button>
      <Button onClick={() => AddMood(5, currentUser)}>😁</Button>
      </Container>
    </>
  );
};
