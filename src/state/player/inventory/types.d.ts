export interface Inventory {
    items: ItemStack[];
}

export interface ItemStack {
    itemId: string;
    quantity: number;
}
