import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import rootReducer from "./rootReducer";


export default store = configureStore({
    reducer: rootReducer
})