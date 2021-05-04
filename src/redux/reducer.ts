import produce from "immer";
import { Reducer } from "redux";
import { XAction, XActionType } from "./actionTypes";
import { defaultState, XState } from ".";

export const xReducer: Reducer<XState, XAction> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case XActionType.Add:
            return produce(state, draft => {
                draft.value += action.amount;
                draft.numberOfMutations += 1;
            });
        case XActionType.Set:
            return produce(state, draft => {
                draft.value = action.value;
                draft.numberOfMutations += 1;
            });
        default:
            return state;
    }
};
