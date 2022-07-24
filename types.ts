export type SearchStateT ={
    text: string
}

export enum SearchActionsEnum{
    ADD = 'ADD'
}

export type SearchActionT ={
    type: SearchActionsEnum;
    payload: string;
}
export type AppState = {
    search: SearchStateT,
    beers: beerState
}

export type beerT = {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    trager_og: number,
    ebc: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    volume:{
        value:number,
        unit: string
    },
    boil_volume:{
        value:number,
        unit: string
    },
    
    method:{
        mash_temp: {
            value: number,
            unit: string
        }[],
        fermentation:{
            temp:{
                value:number,
                unit: string
            }
        },
        twist:string | null
    },
    ingredients: {
        malt: {
            name: string,
            amount: {
                value: number,
                unit: string
            }
        }[],
        hops:{
            name: string,
            amount: {
                value: number,
                unit: string
            },
            add:string,
            attribute: string
        }[],
        yeast:string
    },
    food_pairing: Array<string>,
    brewers_tips: string,
    contributed_by: string
    

}

export type beerState ={
    beers: Array<beerT>
}

export type beerActions = {
    type: string,
    payload: Array<beerT>
}
