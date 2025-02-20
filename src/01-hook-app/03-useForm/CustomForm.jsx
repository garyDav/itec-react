import { useState } from "react";
import { UseForm } from "../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const CustomForm = () => {
  const [validName, setValidName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const { formValues, onInputChange, onReset } = UseForm(
    initialState,
    setValidName,
    setValidPassword,
  );

  const { name, email, password } = formValues;

  const onSave = (e) => {
    e.preventDefault();
    let valid = true;
    // Validaciones
    // name ~ana
    if (name.length < 3) {
      valid = false;
      setValidName(false);
    }
    if (password.length < 6 ) {
      valid = false;
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
    if (valid) {
      // Save
      // onReset();
      console.log("Formulario guardado");
    }
  };

  return (
    <>
      <h1>Registro Usuario</h1>
      <hr />

      <form onSubmit={onSave}>
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
          <br />
          {!validName && (
            <span>El nombre es requerido / introduzca un nombre valido.</span>
          )}
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
        {!validPassword &&(
        <span>La contraseña debe tener al menos 6 caracteres</span>)}
        <hr />
        <button type="submit">Guardar</button>
        <br />
        <button type="button" onClick={onReset}>
          Cancelar
        </button>
      </form>
    </>
  );
};
