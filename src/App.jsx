// import { CounterApp } from "./01-hook-app/01-useState/CounterApp";
import { useEffect, useState } from "react";
import { CounterWithCustomHook } from "./01-hook-app/01-useState/CounterWithCustomHook";
import { MessageApp } from "./01-hook-app/02-useEfect/mensaje";
import { FormLogin } from "./01-hook-app/02-useEfect/FormLogin";

export const HooksApp = () => {
 const [message,setMessage]=useState("")
 useEffect(()=>{
  console.log( "llamada del useEffecto");
 })
  return (
    <>
      <MessageApp />
      <FormLogin/>
      ,<h2>{//expresiones JS
      // Operaciones matematicas,llamados a variables
      message}</h2>
      <button onClick={()=>{
        setMessage("Hola Mundo")
      }}>Mostrar Mensaje </button>
    </>
  );
};
