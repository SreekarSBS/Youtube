import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
import darkModeReducer from "./darkModeSlice"
const appStore = configureStore({
    reducer : {
        sidebar : sidebarReducer,
        darkMode : darkModeReducer
    }
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export default appStore