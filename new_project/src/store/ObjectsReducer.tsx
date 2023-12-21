import elementsReducer from "../components/ElementsCreator/ElementsCreator";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({ elementsSlicer: elementsReducer });

const store = createStore(rootReducer);

export type rootState = ReturnType<typeof rootReducer>;
export type appdispatch = typeof store.dispatch;
export default store;
