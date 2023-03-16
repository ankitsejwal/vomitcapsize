import React, { useState } from "react";
import "../App.css";
import Alert from "./Alert";
import Nav from "./Nav";
import TextForm from "./TextForm";

export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Nav />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
    </>
  );
}
