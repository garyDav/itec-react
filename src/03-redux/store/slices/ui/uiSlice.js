import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    hasError: false,
    msgError: null,
  },
  reducers: {
    setError: (state, action) => {
      state.hasError = action.payload?.hasError;
      state.msgError = action.payload?.msgError;
    },
    removeError: (state) => {
      state.hasError = false;
      state.msgError = null;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setError, removeError, startLoading, endLoading } =
  uiSlice.actions;
