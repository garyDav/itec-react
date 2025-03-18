import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { endLoading, startLoading } from "../../03-redux/store/slices/ui";

export const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.uiState);

  useEffect(() => {
    // timeout para simular una carga 1 segundo
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(endLoading());
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("Estado de carga", loading);
  }, [loading]);

  return <>{loading ? <h6>Cargando...</h6> : <h1>Login</h1>}</>;
};
