import Image from 'next/image'
import React, { FC, useMemo } from 'react'
import { beerT } from '../../types'
import styles from './BeerCard.module.scss'
import play_icon from '../../media/play-icon.svg'
import Link from 'next/link'

type BeerCardProps ={
  beer: beerT
}


const BeerCard: FC<BeerCardProps> = ({beer}) => {

  const getDescription = useMemo(() =>{
    let length = beer.description.split('').length
    let newDescription = beer.description.split('').splice(0, 140).join('')
    if(length > 140){
      return newDescription + '...'
    }
    return newDescription
   
  }, [0])

  return (
   <Link href={`/beer/${beer.id}`}>
      <div className={styles.container} >

        <div className={styles.blackout}>
          <Image width={80} height={80} src={play_icon} alt="" />
        </div>

        <img alt={beer.name} src={beer.image_url}/>

        <p className={styles.title}>
          {beer.name}
        </p>

        <p className={styles.description}>
          {getDescription}
        </p>

      </div>
   </Link>
  )
}

export default BeerCard