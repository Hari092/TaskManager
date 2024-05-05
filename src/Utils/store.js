import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./inputSlice"
const store =configureStore({
    reducer:{
        task:taskReducer
    }
})

export default store;