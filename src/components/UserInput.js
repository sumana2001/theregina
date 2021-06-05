import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AddMood from "../firebase/addmood";

export const UserInput = () => {
  const currentUser = useAuth();

  return (
    <>
      <button onClick={() => AddMood(1, currentUser)}>😞</button>
      <button onClick={() => AddMood(2, currentUser)}>🥺</button>
      <button onClick={() => AddMood(3, currentUser)}>😶</button>
      <button onClick={() => AddMood(4, currentUser)}>🙂</button>
      <button onClick={() => AddMood(5, currentUser)}>😁</button>
    </>
  );
};
