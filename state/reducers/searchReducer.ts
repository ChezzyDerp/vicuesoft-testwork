import { ADD } from './../actions/actionTypes/Search';
import { SearchActionT, SearchStateT } from './../../types';



export const searchReducer: (state: SearchStateT | undefined, action: SearchActionT) => SearchStateT = (
    state = { text: "" },
    action
  ) => {
    switch (action.type) {
      case ADD:
        return {...state, text: action.payload};
      default:
        return state;
    }
  };