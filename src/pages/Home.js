import React from 'react'
import ArticleCard from '../components/ArticleCard'
import Banner from '../components/Banner'
import CovidStats from '../components/CovidStats'
import Loader from '../components/Loader'
import MainWeatherCard from '../components/MainWeatherCard'
import { FaNewspaper } from 'react-icons/fa'
import { useAppContext } from '../context'

const HeaderComp = ({ title }) => {
    return <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-semibold inline-block font-indigo">
            {title}
        </h1>
        <span className="text-md px-4 py-2  rounded-sm  capitalize font-semibold cursor-pointer bg-indigo-700 text-white hover:bg-indigo-800">
            <FaNewspaper className="inline-block mr-2" />See All
        </span>
    </div>
}

function Home() {
    const { trendingNews, covidStats, globalCovidStats, loading, mumbaiNews, delhiNews, covidNews } = useAppContext()


    return (


        loading ?
            <Loader />
            :

            <>
                {trendingNews && <Banner data={trendingNews[0]} />}



                <HeaderComp title="Trending News" />
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


                <div className="flex justify-between items-center my-4">
                    <h1 className="text-2xl font-semibold inline-block font-indigo">
                        Covid Stats
                    </h1>
                    <span className="text-md px-4 py-2  rounded-sm  capitalize font-semibold cursor-pointer bg-indigo-700 text-white hover:bg-indigo-800">
                        <FaNewspaper className="inline-block mr-2" />See All
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                    {
                        globalCovidStats && <CovidStats data={globalCovidStats} />
                    }
                    {
                        covidStats && <CovidStats data={covidStats} />
                    }
                </div>


                <HeaderComp title="Covid News" />
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


                <HeaderComp title="Mumbai News" />
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


                <HeaderComp title="Delhi News" />
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
