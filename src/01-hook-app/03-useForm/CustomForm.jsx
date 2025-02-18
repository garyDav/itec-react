import { UseForm } from "../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const CustomForm = () => {
  const { formValues, onInputChange, onReset } = UseForm(initialState);

  const { name, email, password } = formValues;

  return (
    <>
      <h1>Registro Usuario</h1>
      <hr />

      <form onSubmit={onReset}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <br />
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingrese su correo"
            autoComplete="off"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <br />
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*******"
            autoComplete="off"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <hr />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};
