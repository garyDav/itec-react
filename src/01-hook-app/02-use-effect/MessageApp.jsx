import { useState, useEffect } from "react";

export const MessageApp = () => {
    const [message, setMessage] = useState("");

    useEffect(() =>{
        //if (messagje !== "") setMessage()
        console.log("Componente montado");
    }, [message]);
    return (
       /* <div>
            <h1>MessageApp</h1>
            <hr />
            <h2>
                {
                    message
                }
            </h2>
            <button onClick={() =>{         setMessage("Hola Mundo")}}
            >
                Mostrar mensaje
            </button>
        </div>*/
        <>
            <h4>{message}</h4>
        </>
    );
}