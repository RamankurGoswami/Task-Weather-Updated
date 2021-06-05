import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducers/reducer";

export default configureStore({
    reducer: {
        weather: weatherReducer,
    },
});