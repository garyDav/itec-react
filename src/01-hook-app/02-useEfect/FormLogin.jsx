import { MessageApp } from "./MessageApp";

const initialState = {
  username: "norma",
  password: 345,
};

export const FormLogin = () => {
  const [form, setForm] = useState(initialState);
  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value= {form.username} />
      <br />
      <br />
      <input type="password" name="password" value= {form.password} />

      <br />
      <button>Acceder</button>
      <hr />

      <MessageApp />
    </>
  );
};
