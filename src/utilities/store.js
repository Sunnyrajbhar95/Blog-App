import { configureStore } from "@reduxjs/toolkit";
import  dataSlice from "../utilities/Slice"
import FilterSlice from "./FilterSlice";
import pageSlice from "./pageSlice";
const store=configureStore({
    reducer:{
        blog:dataSlice,
        filter:FilterSlice,
        page:pageSlice
    }
})
export default store;
