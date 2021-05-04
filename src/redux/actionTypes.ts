export const enum XActionType {
    Add = "add",
    Set = "set"
}

export interface XAddAction {
    type: XActionType.Add;
    amount: number;
}

export interface XSetAction {
    type: XActionType.Set;
    value: number;
}

export type XAction = XAddAction | XSetAction;
