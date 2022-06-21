import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../service/EmployeeSlice.jsx";

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
  },
});

