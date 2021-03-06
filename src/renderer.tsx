import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { pickUpInventoryAction } from "./state/player/inventory/action";
import { ItemStack } from "./state/player/inventory/types";
import { store, useDispatch, useSelector } from "./state/store";

const App: React.FC<{}> = () => {
    return (
        <Provider store={store}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <InventoryDisplay />
                <GetItemButton
                    itemStack={{ itemId: "Mithril Pickaxe", quantity: 1 }}
                />
                <GetItemButton
                    itemStack={{ itemId: "Cobblestone", quantity: 16 }}
                />
            </div>
        </Provider>
    );
};

const InventoryDisplay: React.FC<{}> = () => {
    const items = useSelector(state => state.player.inventory.items);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, idx) => (
                <ItemDisplay itemStack={item} key={idx} />
            ))}
        </div>
    );
};

const ItemDisplay: React.FC<{ itemStack: ItemStack }> = ({ itemStack }) => {
    return (
        <div>
            {itemStack.quantity}x {itemStack.itemId}
        </div>
    );
};

const GetItemButton: React.FC<{ itemStack: ItemStack }> = ({ itemStack }) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(pickUpInventoryAction(itemStack))}>
            Get {itemStack.quantity}x {itemStack.itemId}
        </button>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
