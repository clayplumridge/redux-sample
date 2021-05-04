import produce from "immer";
import { combineReducers, Reducer } from "redux";
import {
    PlayerInventoryAction,
    PlayerInventoryActionType,
    PlayerStatAction,
    PlayerStatActionType
} from "./action";
import { addItemStack } from "./inventory/util";
import { Inventory, PlayerStats } from "./types";

export const PlayerStatReducer: Reducer<PlayerStats, PlayerStatAction> = (
    state = {},
    action
) => {
    switch (action.type) {
        case PlayerStatActionType.Update:
            return produce(state, draft => {});
        default:
            return state;
    }
};

export const PlayerInventoryReducer: Reducer<
    Inventory,
    PlayerInventoryAction
> = (state = { items: [] }, action) => {
    switch (action.type) {
        case PlayerInventoryActionType.PickUp:
            return addItemStack(state, action.itemStack);
        case PlayerInventoryActionType.Drop:
            const updatedStack = produce(action.itemStack, draft => {
                draft.quantity *= -1;
            });
            return addItemStack(state, updatedStack);
        default:
            return state;
    }
};

export default combineReducers({
    inventory: PlayerInventoryReducer,
    stats: PlayerStatReducer
});
