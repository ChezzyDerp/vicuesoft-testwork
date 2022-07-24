import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBeersByPage } from '../../pages/api/beerPage'
import { setBeersAC } from '../../state/actions/setBeersAC'
import { AppState, beerT } from '../../types'
import BeerCard from '../BeerCard/BeerCard'
import styles from './Beers.module.scss'
import beerPrelaoder from '../../media/beerPreloader.svg'
import { useRouter } from 'next/router'



const Beers = () => {
  
    const router = useRouter()
    const pagenum =  parseInt(router.query.pagenum as string, 10)
    
    const searchText = useSelector((state:AppState) => state.search.text)
    const beers = useSelector((state: AppState) => state.beers.beers)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [selectPage,setSelectPage] = useState(1)


    useEffect(() =>{
      
      setIsLoading(false)

      getBeersByPage(pagenum).then((data) =>{
  
        dispatch(setBeersAC(data.data))
        setIsLoading(true)
      })
  
  
    }, [pagenum])

    return (
       <div className={styles.container}>

        {isLoading ? beers.map((beer: beerT) =>{
          return <BeerCard key={beer.id} beer={beer}/>
        }): <Image alt='preloader' src={beerPrelaoder}/>}

       </div>
    )
}

export default Beers