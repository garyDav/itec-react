import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "",
  password: "",
};

export const FormLogin = () => {
  const [state, setState] = useState(initialState);
  const { username, password } = state;

  return (
    <>
      <h1>Login</h1>
      <hr />

      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => {
          setState({ ...state, username: event.target.value });
        }}
      />
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
