import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

const bgColor = {
  temperature: "#cce5ff",
  spO2: "#ffe8b3",
  heartRate: "#f7d4d7",
  bloodPressure: "#f7d4d7",
};

function Card({ name, age, sex, doctor, bedno, sp02, bp, temp, hr }) {
  const arr = [
    {
      name: "Spo2",
      key: "spO2",
      val: sp02,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#ffc233" }}
          height={14}
          width={14}
          viewBox="0 0 512 512"
        >
          <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
        </svg>
      ),
    },
    {
      name: "Blood Pressure",
      key: "bloodPressure",
      val: bp,
      svg: (
        <svg
          style={{ fill: "#e05260" }}
          xmlns="http://www.w3.org/2000/svg"
          height={14}
          width={14}
          viewBox="0 0 384 512"
        >
          <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
        </svg>
      ),
    },
    {
      name: "Temperature",
      key: "temperature",
      val: temp,
      svg: (
        <svg
          style={{ fill: "#66b0ff" }}
          xmlns="http://www.w3.org/2000/svg"
          height={14}
          width={14}
          viewBox="0 0 320 512"
        >
          <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V200c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z" />
        </svg>
      ),
    },
    {
      name: "Heart rate",
      key: "heartRate",
      val: hr,
      svg: (
        <svg
          style={{ fill: "#e05260" }}
          xmlns="http://www.w3.org/2000/svg"
          height={14}
          width={14}
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
      ),
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.intro}>
        <p> Name : {name} </p>
        <p> Age : {age} </p>
        <p> Sex : {sex} </p>
        <p> Doctor : {doctor} </p>
        <p> Bed No: {bedno}</p>
      </div>
      <div className={classes.patients_data}>
        {arr.map((data) => (
          <div className={classes.data}>
            <p>{data.name}</p>
            <div className={classes.icon} style={{ backgroundColor: bgColor[data.key] }}>
              {data.svg}
            </div>
            <p>{data.val}</p>
          </div>
        ))}
      </div>
      <div className={classes.buttonContainer}>
        <Link to="/patients">
          <div className={classes.button}>View More</div>
        </Link>
      </div>
    </div>
  );
}
export default Card;
