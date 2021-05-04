import produce from "immer";
import { Reducer } from "redux";
import { InventoryAction, InventoryActionType } from "./action";
import { Inventory } from "./types";
import { addItemStack } from "./util";

const InventoryReducer: Reducer<Inventory, InventoryAction> = (
    state = { items: [] },
    action
) => {
    switch (action.type) {
        case InventoryActionType.PickUp:
            return addItemStack(state, action.itemStack);
        case InventoryActionType.Drop:
            const updatedStack = produce(action.itemStack, draft => {
                draft.quantity *= -1;
            });
            return addItemStack(state, updatedStack);
        default:
            return state;
    }
};

export default InventoryReducer;
