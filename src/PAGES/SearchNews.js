import React, { useEffect, useState, useCallback } from 'react'
import { useAppContext } from '../context'
import ArticleCard from '../components/ArticleCard'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import { useParams } from 'react-router'
import { toCapitalize } from '../functions'

function SearchNews() {
    const { searchNews } = useAppContext()
    const [data, setData] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [pageTotal, setPageTotal] = useState(null)
    let { id } = useParams()

    const getData = useCallback(
        async () => {
            setData(null)
            const res = await searchNews(id, pageNumber)
            if (res) {
                setTimeout(() => {
                    setPageTotal(res.total_pages)
                    setData(res.articles)
                }, 1000)
            }
        }, [pageNumber, searchNews, id])

    useEffect(() => {
        getData()
    }, [getData])




    return (
        !data ?
            <Loader />
            :
            <>
                <h1 className="text-2xl sm:text-xl font-semibold flex font-indigo mb-4 items-end justify-between">
                    <span>
                        <span className="dark:text-red-50">{toCapitalize(id)} News</span>
                    </span>
                    {pageTotal && <span className="text-base sm:text-sm text-gray-500 dark:text-gray-100">Total {pageTotal * 20} Articels</span>}
                </h1>

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
                        </>

                    }
                </div>

                {data && <div className="flex w-full my-4 justify-center">
                    <Pagination pageNumber={pageNumber} pageTotal={pageTotal} setPageNumber={setPageNumber} />
                </div>
                }

            </>

    )
}

export default SearchNews
