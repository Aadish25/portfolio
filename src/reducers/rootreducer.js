import { combineReducers } from 'redux';
import NavBar from "../reducers/navbar/navbar.js"
import SnackBar from "../reducers/snackbar/snackbar.js"
const rootReducer = combineReducers({
        nav:NavBar,
        snackbar:SnackBar
    });
    
    export default rootReducer;
    