import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "",
  password: "",
};

export const FormLogin = () => {
  const [state, setState] = useState(initialState);
  const { username, password } = state;

  const manejarChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h1>Login</h1>
      <hr />

      <input
        type="text"
        name="username"
        value={username}
        onChange={manejarChange}
      />
      <br />
      <br />
      <input type="password" name="password" value={password} 
        onChange={manejarChange} />

      <br />
      <button>Acceder</button>
      <hr />

      {username === "ggary" && <MessageApp />}
    </>
  );
};
