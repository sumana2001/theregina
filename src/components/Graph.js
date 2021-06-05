import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useAuth } from "../contexts/AuthContext";
import firebase from "firebase";
import './App.css';

const Graph = () => {
  const [chartData, setChartData] = useState({});
  const currentUser = useAuth();
  const chart = () => {
    let userMood = [];
    let userDate = [];

    const db = firebase.firestore();
    var docRef = db
      .collection("mood")
      .doc(currentUser.currentUser.email)
      .collection("user");

    docRef
      .get()
      .then((query) => {
        query.forEach((doc) => {
          userMood.push(doc.data().mood);
          userDate.push(doc.data().date);
        });
        setChartData({
          labels: userDate,
          datasets: [
            {
              label: "Happiness Index",
              data: userMood,
              backgroundColor: ["#ff0000"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="graph">
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Happiness Index", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
