import { Reducer } from "react";
import produce from "immer";
import { PlayerStatAction, PlayerStatActionType } from "./action";
import { PlayerStats } from "./types";

const PlayerStatReducer: Reducer<PlayerStats, PlayerStatAction> = (
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

export default PlayerStatReducer;
