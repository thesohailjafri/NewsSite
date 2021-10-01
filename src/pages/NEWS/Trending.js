import React from 'react'
import { useAppContext } from '../../context'
import ArticleCard from '../../components/ArticleCard'
import Pagination from '../../components/Pagination'
function Trending() {
    const { trendingNews } = useAppContext()

    return (
        <>
            <div className="grid grid-cols-4 gap-4
        lg:grid-cols-3
        md:grid-cols-2
         sm:grid-cols-1
        ">
                {
                    trendingNews &&
                    trendingNews.map((item, i) => {
                        return <ArticleCard data={item} />
                    })
                }
            </div>
            <Pagination />
        </>
    )
}

export default Trending
