import { combineReducers } from "redux";
import inventoryReducer from "./inventory/reducer";
import statReducer from "./stats/reducer";

export default combineReducers({
    inventory: inventoryReducer,
    stats: statReducer
});
