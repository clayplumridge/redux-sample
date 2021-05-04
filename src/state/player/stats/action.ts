export const enum PlayerStatActionType {
    Update = "update"
}

export interface UpdatePlayerStatAction {
    type: PlayerStatActionType.Update;
}

export type PlayerStatAction = UpdatePlayerStatAction;
