import { Reducer } from "react";
import produce from "immer";
import { StatAction, StatActionType } from "./action";
import { PlayerStats } from "./types";

const StatReducer: Reducer<PlayerStats, StatAction> = (state = {}, action) => {
    switch (action.type) {
        case StatActionType.Update:
            return produce(state, draft => {});
        default:
            return state;
    }
};

export default StatReducer;
