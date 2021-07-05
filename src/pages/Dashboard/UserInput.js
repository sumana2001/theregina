import React from "react";
import styled from "styled-components";
import { useAuth } from "../../auth/AuthContext";
import AddMood from "../../functions/addmood";

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
  font-size:120px;
  cursor:pointer;
  @media screen and (max-width:768px){
    font-size:50px;
  }
`

export const UserInput = () => {
  const currentUser = useAuth();

  // In the addmood function passing the value for reaction and userStatus
  return (
    <>
    <Container>
      <Button onClick={() => AddMood(1, currentUser)}>😭</Button>
      <Button onClick={() => AddMood(2, currentUser)}>🥺</Button>
      <Button onClick={() => AddMood(3, currentUser)}>😐</Button>
      <Button onClick={() => AddMood(4, currentUser)}>🥰</Button>
      <Button onClick={() => AddMood(5, currentUser)}>🥳</Button>
      </Container>
    </>
  );
};
