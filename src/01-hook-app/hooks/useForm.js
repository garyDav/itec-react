import { useState } from "react";

export const UseForm = (initialState, setValidName) => {
  const [formValues, setFormValues] = useState(initialState);
  const [formValid, setFormValid] = useState(true);

  const onInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormValid(true);
  };

  const onReset = () => {
    setFormValues(initialState);
  };

  const onValidError=()=>{
    setFormValid(false);
  }
  return {
    formValues,
    onInputChange,
    onReset,
    formValid,
    onValidError,
  };
};
