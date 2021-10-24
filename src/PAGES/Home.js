import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import Banner from '../components/Banner'
import CovidStats from '../components/CovidStats'
import Loader from '../components/Loader'
import MainWeatherCard from '../components/MainWeatherCard'
import { FaNewspaper } from 'react-icons/fa'
import { useAppContext } from '../context'

const HeaderComp = ({ title, seeAllUrl }) => {
    return <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-semibold inline-block dark:text-gray-50">
            {title}
        </h1>
        {seeAllUrl && <Link to={seeAllUrl}>
            <span className="text-md px-4 py-2  rounded-sm  capitalize font-semibold cursor-pointer bg-indigo-700 dark:bg-indigo-300 text-white dark:text-gray-900 hover:bg-indigo-800">
                <FaNewspaper size={20} className="inline-block mr-2" />See All
            </span>
        </Link>}

    </div>
}

function Home() {
    const { trendingNews, covidStats, globalCovidStats, loading, mumbaiNews, delhiNews, covidNews, getHomePageData } = useAppContext()


    useEffect(() => {
        getHomePageData()
    }, [])

    return (


        loading ?
            <Loader />
            :

            <>
                {trendingNews && <Banner data={trendingNews[0]} />}



                <HeaderComp title="Trending News" seeAllUrl='/news/trending' />
                <div className="grid grid-cols-4 gap-4
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1">
                    {
                        trendingNews &&
                        trendingNews.map((item, i) => {
                            return <ArticleCard data={item} />
                        })
                    }
                </div>

                <HeaderComp title="Covid Stats" />

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                    {
                        globalCovidStats && <CovidStats data={globalCovidStats} />
                    }
                    {
                        covidStats && <CovidStats data={covidStats} />
                    }
                </div>


                <HeaderComp title="Covid News" seeAllUrl='/news/covid' />
                <div className="grid grid-cols-4 gap-4
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1">
                    {
                        covidNews &&
                        covidNews.map((item, i) => {
                            return <ArticleCard data={item} />
                        })
                    }
                </div>


                <HeaderComp title="Mumbai News" seeAllUrl='/news/mumbai' />
                <div className="grid grid-cols-4 gap-4
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1">
                    {
                        mumbaiNews &&
                        mumbaiNews.map((item, i) => {
                            return <ArticleCard data={item} />
                        })
                    }
                </div>


                <HeaderComp title="Delhi News" seeAllUrl='/news/delhi' />
                <div className="grid grid-cols-4 gap-4
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1">
                    {
                        delhiNews &&
                        delhiNews.map((item, i) => {
                            return <ArticleCard data={item} />
                        })
                    }
                </div>
            </>
    )
}

export default Home
