import { ADD } from './actionTypes/Search';
export const SetSearchAction = (payload: string) =>{
    return {type: ADD, payload}
}