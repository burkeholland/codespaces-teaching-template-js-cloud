/**
 * Application component
 * 
 * To contain application wide settings, routes, state, etc.
 */

import React, { useEffect, useState } from "react";
import Header from "./Components/Header";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, [])

  async function getMessage() {
    const response = await fetch("api/message");
    const json = await response.json();
    setMessage(json.message);
  }

  return (
    <div>
      <Header/>
      <span>{{ message }}</span>
    </div>
    )

  ;
};

export default App;
