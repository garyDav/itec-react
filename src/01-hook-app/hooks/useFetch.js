import { useState, useEffect } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch(); // Asincrona
    // console.log("esto si o si se ejecuta la primera vez");
    /*
    // declarando (crea) y asignando (pasa un valor)
    // Operación sincrona
    let a; // Declaración, reservar espacio en memoria
    a = 1; // Asignación, es darle un valor, "ocupa"
    const b = 9;
    console.log(a + b);


    - - * * - * - * - -
    - - - - - - - - - -
    - -[0 1] - - - * - -
    - - - - - - - - - -
    - * * * * * * * - *
    - - * - - - - - - -
    - - - - - - - - - 
    */
  }, []);

  const getFetch = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    console.log(response);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
