import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch();

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading && <p>Cargando...</p>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
