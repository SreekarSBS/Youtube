import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name : "darkMode",
    initialState : {
       showDarkMode : true 
    },
    reducers :  {
        toggledarkMode : (state) => {
            state.showDarkMode = !state.showDarkMode
        }
    }

})

export const {toggledarkMode} = darkModeSlice.actions
export default darkModeSlice.reducer