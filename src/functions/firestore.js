import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "firebase/firestore";
import { UserInput } from "../pages/Dashboard/UserInput";

function Firestore()
{
  // get current user
  const [users,setUsers] = useState([]);
  
  // set value when page refreshes 
  useEffect(() =>
  {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  // passing the data to user input
  return (
    <div>
      <ul>
        <UserInput />
      </ul>
    </div>
  );
}

export default Firestore;
