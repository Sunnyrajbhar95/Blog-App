import { createSlice} from "@reduxjs/toolkit";
const initialState={
    currentPage:1
}
const pageSlice=createSlice({
     name:'page',
     initialState,
     reducers:{
        increament:(state,actions)=>{
            state.currentPage=state.currentPage+1;
        },
        decreament:(state,actions)=>{
            state.currentPage=state.currentPage-1;
        }
     }
})
export const{increament,decreament}=pageSlice.actions;
export default pageSlice.reducer;