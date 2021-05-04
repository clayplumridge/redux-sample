import { ItemStack } from "./types";

export const enum InventoryActionType {
    PickUp = "pickup",
    Drop = "drop"
}

interface PickUpInventoryAction {
    type: InventoryActionType.PickUp;
    itemStack: ItemStack;
}

export function pickUpInventoryAction(
    itemStack: ItemStack
): PickUpInventoryAction {
    return {
        itemStack,
        type: InventoryActionType.PickUp
    };
}

interface DropInventoryAction {
    type: InventoryActionType.Drop;
    itemStack: ItemStack;
}

export function dropInventoryAction(itemStack: ItemStack): DropInventoryAction {
    return { itemStack, type: InventoryActionType.Drop };
}

export type InventoryAction = PickUpInventoryAction | DropInventoryAction;
