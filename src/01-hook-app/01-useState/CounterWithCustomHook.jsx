import { UseCounter } from "../hooks/useConter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = UseCounter();

  return (
    <>
      <h1>Counter: {counter}</h1>

      <hr />

      <button onClick={() => increment()}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => decrement(2)}>-2</button>
    </>
  );
};
