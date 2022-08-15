import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import state from "../../../store/store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";

const Login = () => {
  const [error, setError] = useState("");
  const [login, setLogin] = useState("");
  const [indPass, setIndPass] = useState("");
  let navigate = useNavigate();

  const fetchAccess = () => {
    axios
      .post("http://localhost:7000/api/login", {
        login: login,
        individualPassword: indPass,
      })
      .then((response) => {
        const newRole = response.data.message;
        if (newRole === "owner") {
          state.setRole("owner");
          navigate("/ownerMain");
        } else if (newRole === "admin") {
          state.setRole("admin");
          navigate("/adminMain");
        }
      })
      .catch((error) => {
        const badResponse = error.response.data.message;
        setError(badResponse);
      });
  };

  return (
    <Form
      error={error}
      formListener={(event) => {
        event.preventDefault();
        fetchAccess();
      }}
      inputListenerLogin={(event) => {
        setLogin(event.target.value);
      }}
      inputListenerPassword={(event) => {
        setIndPass(event.target.value);
      }}
    />
  );
};

export default observer(Login);
