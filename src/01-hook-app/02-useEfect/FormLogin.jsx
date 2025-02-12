import { MessageApp } from "./MessageApp";

const initialSatate=()=>{
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
}
export const FormLogin = () => {
  return (
    <>
      <h1>Login</h1>
      <hr />

      <input type="text" name="username" value={username} />
      <br />
      <br />
      <input type="password" name="password" value={password}/>

      <br />
      <button>Acceder</button>
      <hr />

      <MessageApp />
    </>
  );
};
