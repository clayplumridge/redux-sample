import { PlayerInventoryAction } from "./inventory/action";
import { PlayerStatAction } from "./stats/action";

export type PlayerAction = PlayerStatAction | PlayerInventoryAction;
