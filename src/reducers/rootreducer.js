import { combineReducers } from 'redux';
import NavBar from "../reducers/navbar/navbar.js"
const rootReducer = combineReducers({
        nav:NavBar
    });
    
    export default rootReducer;
    