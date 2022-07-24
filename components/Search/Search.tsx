import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SetSearchAction } from '../../state/actions/SetSearchAC'
import styles from './Search.module.scss'



const Search: FC = () => {

    const [searchText, setSearchText] = useState<string>('')
    const dispatch = useDispatch()
    const router = useRouter()
    const pagenum =  parseInt(router.query.pagenum as string, 10)
    const [nowPage, setNowPage] = useState(0)

    useEffect(() =>{
        setNowPage(pagenum)
    },[pagenum])

    const handleEvent = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        
        setSearchText(e.target.value)
        dispatch(SetSearchAction(searchText))
    }

    const incrementPage = useMemo(() =>{
        return (pagenum + 1).toString()
    }, [pagenum])
    const dicrementPage = useMemo(() =>{
        
        return pagenum == 1 ? pagenum.toString() : (pagenum - 1).toString()
    }, [pagenum])

    return (
        
        <div className={styles.wrap}>

            <Link href={dicrementPage}>
                <button>Prev page</button>
            </Link>

            <input 
                className={styles.main}
                placeholder="Beer name..."
                type="text"
                value={searchText}
                onChange={handleEvent}
            />

            <Link href={incrementPage}>
                <button>Next page</button>
            </Link>

       
        
        </div>
        
    )
}

export default Search