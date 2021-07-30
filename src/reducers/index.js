import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducers from "./userReducers";


// STORE || STATE
export default combineReducers({
    posts: postReducer,
    users : userReducers
})