export interface PlayerState {
    stats: PlayerStats;
    inventory: Inventory;
}

export interface PlayerStats {}

export interface Inventory {
    items: ItemStack[];
}

export interface ItemStack {
    itemId: string;
    quantity: number;
}
