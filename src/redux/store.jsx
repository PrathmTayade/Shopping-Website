import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "./quantityReducer";

export default configureStore({
  reducer: {
    quantity : quantityReducer,
  },
});
