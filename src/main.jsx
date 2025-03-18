import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import { HooksApp } from "./App.jsx";
import { store } from "./03-redux/store";

const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <HooksApp />
      </Provider>
    </PersistGate>
  </StrictMode>,
);
