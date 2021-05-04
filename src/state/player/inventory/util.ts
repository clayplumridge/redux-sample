import produce from "immer";
import { Inventory, ItemStack } from "@/state/player/inventory/types";

export function addItemStack(inv: Inventory, stack: ItemStack) {
    return produce(inv, draft => {
        const existingStack = draft.items.find(x => x.itemId == stack.itemId);

        if (existingStack) {
            existingStack.quantity += stack.quantity;
        } else {
            draft.items.push(stack);
        }
    });
}
