import { useState } from "react";
import { MessageApp } from "./MessageApp";

const initialState = {
  username: "",
  password: "",
};

export const FormLogin = () => {
  const [form, setForm] = useState(initialState);
  const [state, setState] = useState(initialState);
  const { username, password } = state;

  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value= {username} />
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
      <input
      type="text"
      name="password"
      value={password}
      onChange={(event) => {
        setState({ ...state, password: event.target.value });
      }}
      />

      <br />
      <button>Acceder</button>
      <hr />

      {username === "ggary" && <MessageApp />}
    </>
  );
};
