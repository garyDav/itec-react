import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "username",
  password: "123456",
};

export const FormLogin = () => {
  const [satate, setState] = useState(initialState);
  const { username, password } = satate;

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value={username}  onChange={handleChange} />
      <br />
      <br />
      <input type="password" name="password" value={password}  onChange={handleChange}
      />

      <br />
      <button>Acceder</button>
      <hr />

      {username === "123456" && <MessageApp />}
    </>
  );
};
