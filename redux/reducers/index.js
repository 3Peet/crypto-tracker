import {combineReducers} from "redux";
import counterReducer from "./counter.reducer";
import myFirstReducer from "./users.reducer";
import pairDataReducer from "./pairData.reducer";

export default combineReducers({
	counterReducer,
	myFirstReducer,
	pairDataReducer,
});
