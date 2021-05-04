import { Inventory } from "./inventory/types";
import { PlayerStats } from "./stats/types";

export interface PlayerState {
    stats: PlayerStats;
    inventory: Inventory;
}
