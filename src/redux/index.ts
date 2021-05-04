import { Immutable } from "immer";
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
} from "react-redux";
import { combineReducers, createStore } from "redux";
import { xReducer } from "./reducer";

interface XBaseState {
    numberOfMutations: number;
    value: number;
}

export type XState = Immutable<XBaseState>;
export const defaultState: XState = { numberOfMutations: 0, value: 0 };

export const rootReducer = combineReducers({ x: xReducer });
export const store = createStore(rootReducer);
export type State = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();
