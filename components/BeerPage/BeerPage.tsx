import Image from 'next/image'
import React, { FC } from 'react'
import { beerT } from '../../types'
import styles from './BeerPage.module.scss'

type BeerPageProps = {
    beer: beerT | undefined
}

const BeerPage:FC<BeerPageProps> = ({beer}) => {
  return (
    <div className={styles.container}>
        <div className={styles.wrap}>

            <img src={beer?.image_url }  alt="" />

            <div className={styles.info}>

                <p className={styles.name}>
                    {beer?.name} - <span>`{beer?.tagline}`</span>
                </p>

                <p className={styles.descriptions}>
                    {beer?.description}
                </p>
                <p className={styles.abv}>
                   Abv : {beer?.abv}%
                </p>

                <p className={styles.abv}>
                   Food pairing : {beer?.food_pairing}
                </p>
                


            </div>

        </div>
    </div>
  )
}

export default BeerPage