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

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value= {username} />
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <br />
      <button>Acceder</button>
      <hr />

      {username === "ggary" && <MessageApp />}
    </>
  );
};
