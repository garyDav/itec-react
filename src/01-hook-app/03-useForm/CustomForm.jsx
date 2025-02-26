import { useState, useEffect } from "react";
import { UseForm } from "../hooks/useForm";
import { useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const usuarios = [];

export const CustomForm = () => {
  const [validName, setValidName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const { formValues, onInputChange, onReset, formValid, onValidError } =
    UseForm(initialState, setValidName);

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

    if (password.length < 6) {
      valid = false;
      setValidPassword(false);
    }

    if (valid) {
      // Save
      setUsuarios([...usuarios, { name, email }]);
      onReset();
    } else {
      onValidError();
    }
  };

  const onSearch = ({ target: { value } }) => {
    const filtered = usuarios.filter((usuario) =>
      usuario.name.toLowerCase().includes(value.toLowerCase()),
    );

    setUsuarios(filtered);
  };

  useEffect(() => {
    if (formValid) {
      setValidName(true);
      setValidPassword(true);
    }
  }, [formValid]);

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
        <br />
        {!validPassword && (
          <span>La contraseña es requerida / minimo 6 caracteres.</span>
        )}

        <hr />
        <button type="submit">Guardar</button>
        <br />
        <button type="button" onClick={onReset}>
          Cancelar
        </button>
      </form>

      <div>
        <h1>Usuarios</h1>
        <hr />
        <input type="text" onChange={onSearch} autoComplete="off" />
        <br />
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              {++index} {usuario.name} - {usuario.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
