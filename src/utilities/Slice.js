import { createSlice } from "@reduxjs/toolkit";

const initialState={
        data:null
}
const dataSlice=createSlice({
    name:'blog',
    initialState,
     reducers:{
        blogData:(state,actions)=>{
            state.data=actions.payload
            
        }
     }

})
export const {blogData}=dataSlice.actions;
export default dataSlice.reducer;