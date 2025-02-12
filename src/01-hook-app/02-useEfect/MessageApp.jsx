import { useState, useEffect } from "react";

export const MessageApp = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // if (message !== "") setMessage(message + ", hola don Jose"); No cometer este error
    console.log("Componente montado");
  }, [message]);

  return (
    <>
      <h4>{message}</h4>
    </>
  );
};
