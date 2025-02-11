import { useState, useEffect } from "react";

export const MessageApp = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Componente montado");
    // if (message !== "") setMessage(message + ", hola don Jose");
  }, [message]);

  return (
    <>
      <h1>MessageApp</h1>
      <hr />
      <h2>
        {
          // Expresion JS
          message
        }
      </h2>
      <button
        onClick={() => {
          setMessage("Hola don Pepito");
        }}
      >
        Mostrar Mensaje
      </button>
    </>
  );
};
