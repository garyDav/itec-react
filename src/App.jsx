// import { CounterApp } from "./01-hook-app/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-hook-app/01-useState/CounterWithCustomHook";
// import { MessageApp } from "./01-hook-app/02-useEfect/MessageApp";

import { FormLogin } from "./01-hook-app/02-useEfect/FormLogin";

export const HooksApp = () => {
 const [message,setMessage]=useState("")
 useEffect(()=>{
  console.log( "llamada del useEffecto");
 })
  return (
    <>
      <FormLogin />
    </>
  );
};
