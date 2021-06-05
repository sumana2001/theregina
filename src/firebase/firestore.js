import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "firebase/firestore";
import { UserInput } from "../components/UserInput";

function Firestore() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <UserInput />
      </ul>
    </div>
  );
}

export default Firestore;
