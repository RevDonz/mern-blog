import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from './Reducer/reducer'

const store = createStore(reducer, applyMiddleware(thunk));

export default store