import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import { store } from "./store";
import AppRouter from "../02-router/AppRouter.jsx";

const persistor = persistStore(store);

export const AppRedux = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </PersistGate>
  );
};
