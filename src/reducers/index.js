

import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootreducers = combineReducers({
    todoReducer
});

export default rootreducers;