import { useState, useEffect } from "react";

export const MessageApp = () => {
  const [message, setMessage] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // if (message !== "") setMessage(message + ", hola don Jose"); No cometer este error

    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("componente desmontado");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h4>{JSON.stringify(coords)}</h4>
    </>
  );
};