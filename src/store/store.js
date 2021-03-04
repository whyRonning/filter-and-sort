import {compose, createStore} from "redux";
import {filterReducer} from "./filter";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store=createStore(filterReducer,composeEnhancers());