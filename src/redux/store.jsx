import rootReducers from "./reducer";
import { legacy_createStore as createStore } from "@reduxjs/toolkit";

const store = createStore(rootReducers);

export default store;
