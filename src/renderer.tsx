import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, useDispatch, useSelector } from "./redux";
import { xAdd, xSet } from "./redux/actionCreators";

const App: React.FC<{}> = () => {
    return (
        <Provider store={store}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <XDisplay />
                <XAddButton />
                <XSetButton />
            </div>
        </Provider>
    );
};

const XDisplay: React.FC<{}> = () => {
    const x = useSelector(state => state.x);
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "8px" }}>Value: {x.value}</div>
            <div>Number of Mutations: {x.numberOfMutations}</div>
        </div>
    );
};

const XAddButton: React.FC<{}> = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(xAdd(1))}>Add 1</button>;
};

const XSetButton: React.FC<{}> = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(xSet(0))}>Set to 0</button>;
};

ReactDOM.render(<App />, document.getElementById("root"));
