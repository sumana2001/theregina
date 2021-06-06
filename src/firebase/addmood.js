import React from "react";
import firebase from "firebase";

export default function AddMood(mood, currentUser) {
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate());
  console.log(typeof date);
  const db = firebase.firestore();
  var firebaseUser = currentUser;
  db.collection("mood")
    .doc(firebaseUser.currentUser.email)
    .collection("user")
    .doc(date)
    .set({
      mood: mood,
      date: date,
    })

    .then(() => {
      console.log("Done");
    });
  return <div></div>;
}
