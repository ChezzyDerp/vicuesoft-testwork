import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'
const Header = () => {
  return (
        <Link href={'/beer/page/1'}>
             <div className={styles.header}>

                <span>catalog of </span>

                <h1>Drunk Punk</h1>

                <span>best beer </span>

            </div>
        </Link>
  )
}

export default Header