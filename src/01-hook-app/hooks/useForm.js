import { useState } from "react";

export const UseForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const onInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onReset = (e) => {
    e.preventDefault();
    setFormValues(initialState);
  };

  return {
    formValues,
    onInputChange,
    onReset,
  };
};
