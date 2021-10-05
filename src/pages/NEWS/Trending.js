import React, { useEffect, useState, useCallback } from 'react'
import { useAppContext } from '../../context'
import ArticleCard from '../../components/ArticleCard'
import Pagination from '../../components/Pagination'

function Trending() {
    const { searchNews } = useAppContext()
    const [pageNumber, setPageNumber] = useState(1)
    const [pageTotal, setPageTotal] = useState(null)

    const [data, setData] = useState(null)

    const getData = useCallback(
        async () => {
            const res = await searchNews('trending india', pageNumber)
            setPageTotal(res.total_pages)
            setData(res.articles)
        }, [pageNumber, searchNews])

    useEffect(() => {
        getData()
    }, [getData])




    return (
        <>
            <div className="grid grid-cols-4 gap-4
        lg:grid-cols-3
        md:grid-cols-2
         sm:grid-cols-1
        ">
                {
                    data &&
                    <>
                        {data.map((item, i) => {
                            return <ArticleCard data={item} />
                        })}
                        <Pagination pageNumber={pageNumber} pageTotal={pageTotal} />
                    </>

                }
            </div>

        </>
    )
}

export default Trending
