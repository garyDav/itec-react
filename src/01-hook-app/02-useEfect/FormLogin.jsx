import { MessageApp } from "./MessageApp";

const initialState = {
  username: "",
  password: "",
};

export const FormLogin = () => {
  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value="" />
      <br />
      <br />
      <input type="password" name="password" value="" />

      <br />
      <button>Acceder</button>
      <hr />

      <MessageApp />
    </>
  );
};
