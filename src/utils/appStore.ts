import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
const appStore = configureStore({
    reducer : {
        sidebar : sidebarReducer
    }
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export default appStore