export const enum StatActionType {
    Update = "update"
}

export interface UpdateStatAction {
    type: StatActionType.Update;
}

export type StatAction = UpdateStatAction;
