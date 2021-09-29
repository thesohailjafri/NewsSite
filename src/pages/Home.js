import React from 'react'
import MainWeatherCard from '../components/MainWeatherCard'
import { useAppContext } from '../context'
import dummy from '../static/SVG/newspaper.svg'
function Home() {
    const { trendingNews } = useAppContext()
    let heroUrl = trendingNews ? trendingNews[0].image.url
        :
        dummy

    return (
        <>

            <div
                className="mb-4 w-full h-72 bg-cover relative overflow-hidden bg-black rounded shadow
                md:h-64
             sm:h-48 
                ">
                <img
                    className="absolute w-full top-0 left-0"
                    src={heroUrl} alt="" />

                <div id="shade"
                    className="absolute w-full h-full opacity-30
                    bg-gradient-to-b from-blue-50 to-black "
                ></div>

                {trendingNews && <p
                    className="absolute text-white bottom-0 text-3xl uppercase font-bold p-3 pr-6 shadow-2xl font-sans
                    sm:text-lg
                    "
                >{trendingNews[0]?.title}</p>}

            </div>

            <div
                className="grid grid-cols-4 grid-rows-3  gap-4"
            >

                <div className="bg-red-100">a</div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100"></div>
                <div className="bg-red-100">x</div>

            </div>
        </>
    )
}

export default Home
