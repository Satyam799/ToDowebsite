import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "./Todoslice";


const store=configureStore({
    reducer:{
        Todo:Todoslice
    }
})

export default store