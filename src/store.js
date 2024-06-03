import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,


  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
// Path: frontend/store.js
// Compare this snippet from backend/controllers/productController.js:
