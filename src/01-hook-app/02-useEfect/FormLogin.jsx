import { MessageApp } from "./MessageApp";
import { useState } from 'react'

const initialForm = {
  username: "juan",
  password: "pass",
}

export const FormLogin = () => {

  const [form, setForm] = useState(initialForm);
  const { username, password } = form;

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
