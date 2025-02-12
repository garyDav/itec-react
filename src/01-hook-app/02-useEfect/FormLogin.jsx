import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "username",
  password: "ggary123",
};

export const FormLogin = () => {
  const [satate, setState] = useState(initialState);
  const { username, password } = satate;

  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value={username} />
      <br />
      <br />
      <input type="password" name="password" value={password} />

      <br />
      <button>Acceder</button>
      <hr />

      {username === "ggary" && <MessageApp />}
    </>
  );
};
