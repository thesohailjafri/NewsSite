import React from 'react'
import ArticleCard from '../components/ArticleCard'
import Banner from '../components/Banner'
import CovidStats from '../components/CovidStats'
import Loader from '../components/Loader'
import MainWeatherCard from '../components/MainWeatherCard'
import { useAppContext } from '../context'

function Home() {
    const { trendingNews, covidStats, globalCovidStats, loading } = useAppContext()


    return (


        loading ?
            <Loader />
            :

            <>
                <Banner data={trendingNews} />

                <h1 className="text-2xl m-0 mb-4 font-semibold">
                    Trending News
                </h1>

                <div className="grid grid-cols-4 gap-4
        lg:grid-cols-3
        md:grid-cols-2
         sm:grid-cols-1
        ">
                    {
                        trendingNews &&
                        trendingNews.slice(1, 9).map((item, i) => {
                            return <ArticleCard data={item} />
                        })
                    }
                </div>

                <h1 className="text-2xl m-0 my-4 font-semibold">
                    Covid Stats
                </h1>

                <div className="grid grid-cols-2 gap-4
         sm:grid-cols-1
        ">
                    {
                        covidStats && <CovidStats data={covidStats} />
                    }

                    {
                        globalCovidStats && <CovidStats data={globalCovidStats} />
                    }

                </div>

            </>
    )
}

export default Home
