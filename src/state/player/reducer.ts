import { combineReducers } from "redux";
import PlayerInventoryReducer from "./inventory/reducer";
import PlayerStatReducer from "./stats/reducer";

export default combineReducers({
    inventory: PlayerInventoryReducer,
    stats: PlayerStatReducer
});
