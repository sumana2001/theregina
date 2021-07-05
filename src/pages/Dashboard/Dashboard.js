import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../auth/AuthContext";
import {useHistory } from "react-router-dom";
import Firestore from "../../functions/firestore";
import Graph from "./Graph";
import Navbar from "./NavDashboard";
import styled from 'styled-components';

const Heading=styled.h1`
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

background:black;
color:#fff;
margin-top:5%;
padding-top: 20px;
padding-bottom:20px;
width:100%;
text-align:center;
font-size: 60px;
`

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");

      // when logged out redirected to home

    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
    <Navbar/>
      <Card style={{zIndex:1}}>
        <Card.Body>
          <h1 className="text-center mb-4 quote">

          Be happy for this moment. This moment is your life.<br/>
          So, how's your mood today? Select the emoji👇
            
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>

        <Firestore />

        <Heading>
          You are beautiful. You are strong. You are worth it!
        </Heading>
        
        <Graph />
      </Card>
      <div className="w-100 text-center mt-2" style={{width:"100%",background:"#000"}}>
        <Button variant="link" onClick={handleLogout} style={{color:"#fff"}}>
          Log Out
        </Button>
        </div>
    </>
  );
}
