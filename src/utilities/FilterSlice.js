import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: null,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterdata: (state, actions) => {
        state.data=null;
      state.data = actions.payload;
    //   console.log(state.data)
    },
  },
});
export const { filterdata } = FilterSlice.actions;
export default FilterSlice.reducer;
