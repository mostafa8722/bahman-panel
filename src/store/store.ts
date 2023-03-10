import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/index";

const Store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default Store;
