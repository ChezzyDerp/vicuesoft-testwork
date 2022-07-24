import { reducer } from './reducers/index';
import { createStore } from "redux";


export const store = createStore(reducer)