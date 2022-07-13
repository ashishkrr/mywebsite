
import { configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import { incrementScore } from "./incrementScore";


export const store  = configureStore({
    reducer: {
        counter : incrementScore
    }
});