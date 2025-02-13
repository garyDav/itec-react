import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "",
  password: "",
};

export const FormLogin = () => {
  const [state, setState] = useState(initialState);
  const { username, password } = state;

  const handleChange = (evento) => {
    const { name, value } = evento.target;
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
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="password" name="password" value={handleChange} />

      <br />
      <button>Acceder</button>
      <hr />

      {username === "ggary" && <MessageApp />}
    </>
  );
};
