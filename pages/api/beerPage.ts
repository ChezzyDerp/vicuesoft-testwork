import { instance } from './index';

const PER_PAGE = 40

export const getBeersByPage = (page: any) =>{
    return instance.get(`?page=${page}&per_page=${PER_PAGE}`)
}