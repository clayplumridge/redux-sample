import { XActionType, XAddAction, XSetAction } from "./actionTypes";

export function xAdd(amount: number): XAddAction {
    return {
        amount,
        type: XActionType.Add
    };
}

export function xSet(value: number): XSetAction {
    return {
        type: XActionType.Set,
        value
    };
}
