import { instance } from './index';

export const getBeerById = (id: any) =>{
    return instance.get(`/${id}`)
}