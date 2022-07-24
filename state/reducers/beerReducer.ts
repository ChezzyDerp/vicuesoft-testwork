import { beerState, beerActions } from '../../types';

export const beerReducer: (state: beerState | undefined, action: beerActions) => beerState = 
    (state = {beers:[]}, action ) =>{
        switch(action.type){
            case 'ADD':
                return {...state, beers: action.payload}
            default:
                return state
        }


}