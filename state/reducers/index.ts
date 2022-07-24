import { searchReducer } from './searchReducer';
import { SearchStateT, AppState } from './../../types';
import { combineReducers } from "redux";
import { beerReducer } from './beerReducer';


export const reducer = combineReducers<AppState>({
    search: searchReducer,
    beers: beerReducer
})