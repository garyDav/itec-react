import { useState, useEffect } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    // console.log(getFetch()); // Asincrona
    // console.log("esto si o si se ejecuta la primera vez");
    /*
    // declarando (crea) y asignando (pasa un valor)
    // Operación sincrono
    let a; // Declaración, reservar espacio en memoria
    a = 1; // Asignación, es darle un valor, "ocupa"
    const b = 9;
    - - * * - * - * - -
    - - - - - - - - - -
    - -[0 1] - - - * - -
    - - - - - - - - - -
    - * * * * * * * - *
    - - * - - - - - - -
    - - - - - - - - - 
    // Parametros => function miFun(parametro1, parametro2) {}
    // Argumento => miFun(argumento1, argumento2)
    // Callback => es una función que es parte del parámetro de otra función
    getInforme().then((informe, error) => {
      if (!error)
        console.log(informe);
    });
    getInforme().catch((error) => {
      console.warn(error);
    });
    getInforme().finally((informe) => {
      console.log("La promesa ah terminado");
    });
    */

    /*async function obtenerInforme() {
      const informe = await getInforme();
      console.log("Async y await", informe);
      const a = 1;
      const b = 9;
      const r = a + b;
      console.log(r);
    }
    obtenerInforme();
    */

    // Declarando Asignando
    async function init() {
      // Sleep 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await getFetch();
    }

    // Llamando o utilizando
    init();
  }, []);

  /*const getInforme = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Yea! realicé el informe");
        // reject("Oh :( no pude realizar el informe");
      }, 1);
    });
  };*/

  const getFetch = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/25");

      if (!res.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            status: res.status,
            message: res.statusText,
          },
        });

        return;
      }

      const data = await res.json();
      setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: error,
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
