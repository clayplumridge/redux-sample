import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
} from "react-redux";
import { combineReducers, createStore } from "redux";
import playerReducer from "./player/reducer";

const rootReducer = combineReducers({ player: playerReducer });
export const store = createStore(rootReducer);
export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<Dispatch>();
