import { createSlice } from "@reduxjs/toolkit";

let reduxData={
    loginData:[],

}


let userReducesrs=createSlice({
    name: "FoodCart",
    initialState: reduxData,
    reducers:{
        storeLoginData :(state,action)=>{
               state.loginData.push(action.payload)
        }
    }
})

export const { storeLoginData } = userReducesrs.actions
export default userReducesrs.reducer