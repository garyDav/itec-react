import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "",
  password: ""
};

export const FormLogin = () => {
  const [{username,password}, setState] = useState(initialState);
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

      <MessageApp />
    </>
  );
};
