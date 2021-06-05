import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Firestore from "../firebase/firestore";
import { UserInput } from "./UserInput";
import Graph from "./Graph";
import Navbar from "./NavDashboard";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
    <Navbar/>
      <Card style={{zIndex:1}}>
        <Card.Body>
          <h1 className="text-center mb-4 quote">Be happy for this moment. This moment is your life.<br/>
          So, how's your mood today?</h1>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
        <Firestore />
      </Card>
      <Graph />
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
