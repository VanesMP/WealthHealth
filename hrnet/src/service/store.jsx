import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../service/EmployeeSlice.jsx";

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
  },
});

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
