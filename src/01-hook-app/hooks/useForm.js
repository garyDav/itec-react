import { useState } from "react";

export const UseForm = (initialState, setValidName) => {
  const [formValues, setFormValues] = useState(initialState);

  const onInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setValidName(true);
  };

  const onReset = () => {
    setFormValues(initialState);
  };

  return {
    formValues,
    onInputChange,
    onReset,
  };
};
