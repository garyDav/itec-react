import { useState } from "react";
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
  const { formValues, onInputChange, onReset, formValid, onValidError } = UseForm(
    initialState,
    setValidName,
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

    if(password.length < 6){
        valid = false;
        setValidPassword(false);
    }

    if (valid) {
      // Save
      usuarios.push(formValues);
      onReset();
      console.log("Formulario guardado");
    }else{
      onValidError();
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log("Buscando...");
  } 

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
            <span>El password no tiene el tamaño adecuado</span>
          )}

        <hr />
        <button type="submit">Guardar</button>
        <br />
        <button type="button" onClick={onReset}>
          Cancelar
        </button>
      </form>
      <div>
        <ul>
          {usuarios.map((usuario,index)=>(
            <li key={index}>
              {++index} {usuario.name} - {usuario.email}</li>
          ))}
          <li>Nombre: {name}</li>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
        </ul>
      </div>
    </>
  );
};
