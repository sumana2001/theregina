import React from "react";
import firebase from "firebase";

export default function AddMood(mood, currentUser)
{
  // storing current date in today and converting to req form 
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate());
  
  // connecting with firestore 
  const db = firebase.firestore();

  // get current user from firestore.js
  var firebaseUser = currentUser;

  // creating a new doc with current date 
  // in which adding fields of mood and date
  // in case the document exists it will update the field
  db.collection("mood")
    .doc(firebaseUser.currentUser.email)
    .collection("user")
    .doc(date)
    .set({
      mood: mood,
      date: date,
    })

  // debug
  try {
    console.log("Data pushed");
  } catch (error) {
    console.log("Error: "+ error);
  }

  
  return <></>;
}
