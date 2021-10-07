import React, { useEffect, useState, useCallback } from 'react'
import { useAppContext } from '../context'
import ArticleCard from '../components/ArticleCard'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
function TempNews({ term, name }) {
    const { searchNews } = useAppContext()
    const [pageNumber, setPageNumber] = useState(1)
    const [pageTotal, setPageTotal] = useState(null)

    const [data, setData] = useState(null)

    const getData = useCallback(
        async () => {
            setData(null)
            const res = await searchNews(term, pageNumber)
            setTimeout(() => {
                setPageTotal(res.total_pages)
                setData(res.articles)
            }, 1000)

        }, [pageNumber, searchNews, term])

    useEffect(() => {
        getData()
    }, [getData])




    return (
        !data ?
            <Loader />
            :
            <>
                <h1 className="text-2xl font-semibold flex font-indigo mb-4 items-end justify-between">
                    <span>{name} News</span>
                    {pageTotal && <span className="text-base text-gray-500">Total {pageTotal * 20} {name} Articels</span>}
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

export default TempNews
