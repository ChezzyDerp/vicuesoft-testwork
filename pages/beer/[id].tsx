import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BeerPersonalPage.module.scss'
import { beerT } from '../../types'
import { getBeerById } from '../api/beerById'
import beerLoader from '../../media/beerPreloader.svg'
import Head from 'next/head'
import BeerPage from '../../components/BeerPage/BeerPage'
import default_image from '../../media/default_image.png'
import Header from '../../components/Header/Header'

const Beer: NextPage = () => {
    const router = useRouter()
    const {id} = router.query
    const [beer, setBeer] = useState<beerT | undefined>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        getBeerById(id).then((data) =>{
            setBeer(data.data[0])
            console.log(beer)
            setIsLoading(false)
        })
    }, [id])


    return (
        <div >
            <Head>
                <title>Drunk Punk Beer</title>
                <meta name="description" content="Drunk Punk, best catalog of beer in the world!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.container} >

                <Header/>

                {isLoading                        ? 
                    <Image alt='preloader' src={beerLoader}/>    :
                    <BeerPage beer={beer}/>
                }    
            </main>
        </div>
  )
}

export default Beer