import { combineReducers } from "redux";
import ScooterReducer from "./ScooterReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({ ScooterReducer, AuthReducer });

export default rootReducer;
