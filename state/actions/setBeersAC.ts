import { beerT } from './../../types';

export const setBeersAC = (payload: Array<beerT>) =>{
    return {type: 'ADD', payload}
}