import { ItemStack } from "./types";

export const enum PlayerStatActionType {
    Update = "update"
}

export interface UpdatePlayerStatAction {
    type: PlayerStatActionType.Update;
}

export type PlayerStatAction = UpdatePlayerStatAction;

export const enum PlayerInventoryActionType {
    PickUp = "pickup",
    Drop = "drop"
}

interface PickUpPlayerInventoryAction {
    type: PlayerInventoryActionType.PickUp;
    itemStack: ItemStack;
}

export function pickUpPlayerInventoryAction(
    itemStack: ItemStack
): PickUpPlayerInventoryAction {
    return {
        itemStack,
        type: PlayerInventoryActionType.PickUp
    };
}

interface DropPlayerInventoryAction {
    type: PlayerInventoryActionType.Drop;
    itemStack: ItemStack;
}

export function dropPlayerInventoryAction(
    itemStack: ItemStack
): DropPlayerInventoryAction {
    return { itemStack, type: PlayerInventoryActionType.Drop };
}

export type PlayerInventoryAction =
    | PickUpPlayerInventoryAction
    | DropPlayerInventoryAction;
export type PlayerAction = PlayerStatAction | PlayerInventoryAction;
