import { createSlice} from "@reduxjs/toolkit";
import { chatValue } from "./constant";
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addChat:(state,action)=>{
            state.messages.splice(chatValue,1)
            state.messages.unshift(action.payload);
        }
    },
});
export const {addChat}=chatSlice.actions;
export default chatSlice.reducer;