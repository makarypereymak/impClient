import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import Form from "../../../components/form/Form";

const AddAdmin = () => {
  const [error, setError] = useState("");
  const [login, setLogin] = useState("");
  const [indPass, setIndPass] = useState("");

  // const fetchAccess = () => {
  //   axios
  //     .post("http://localhost:7000/api/addAdmin", {
  //       login: login,
  //       individualPassword: indPass,
  //     })
  //     .then((response) => {
  //       const newRole = response.data.message;
  //       if (newRole === "owner") {
  //         state.setRole("owner");
  //         navigate("/ownerMain");
  //       } else if (newRole === "admin") {
  //         state.setRole("admin");
  //         navigate("/adminMain");
  //       }
  //     })
  //     .catch((error) => {
  //       const badResponse = error.response.data.message;
  //       setError(badResponse);
  //       console.log(error.response.data.message);
  //     });
  // };

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

export default AddAdmin;
