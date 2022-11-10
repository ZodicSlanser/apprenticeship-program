import axios from "axios";
import { API_ROUTES } from "./Config";
import React from "react";
import { useState, useEffect, memo } from "react";
import { addApprenticeship } from "./API";
import arrowLeft from "../Assets/Header/arrow-left.svg";
import addDone from "../Assets/Header/add-done.svg";
import add from "../Assets/Header/add.svg";

export default memo(function Test(props) {
  const [done, setDone] = useState();
  const [apprenticeships, setApprenticeships] = useState([]);

  axios
    .post(
      "/ZBYYYYY",
      {
        firstName: "Fred",
        lastName: "Flintstone",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div> test </div>;
});
