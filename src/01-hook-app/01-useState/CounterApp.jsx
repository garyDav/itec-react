import { useState } from "react";

const initialState = {
  counter1: 10,
  counter2: 20,
  counter3: 30,
};

export const CounterApp = () => {
  const [contador, setContador] = useState(initialState);
  const { counter1, counter2, counter3 } = contador; // Desestructuración

  return (
    <>
      <h1>CounterApp: {counter1}</h1>
      <h1>CounterApp: {counter2}</h1>
      <h1>CounterApp: {counter3}</h1>

      <hr />
      <button
        onClick={() => {
          setContador({ ...contador, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
