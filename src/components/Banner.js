import React from 'react'
import dummy from '../static/SVG/newspaper.svg'

function Banner({ data }) {
    let heroUrl = data ? data[0].image.url
        :
        dummy

    return (
        <div
            className="mb-4 w-full h-80 bg-cover relative overflow-hidden bg-black border-8 border-white rounded shadow-md
            lg:h-72 
             md:h-64 md:border-4
              sm:h-48 sm:border-4
        ">
            <img
                className="absolute w-full top-0 left-0 bg-cover"
                src={heroUrl} alt="" />

            <div id="shade"
                className="absolute w-full h-full opacity-30
            bg-gradient-to-b from-blue-50 to-black "
            ></div>

            {data && <p
                className="absolute text-white bottom-0 text-3xl uppercase font-bold p-3 pr-6 shadow-2xl font-sans
            sm:text-lg
            "
            >{data[0]?.title}</p>}

        </div>

    )
}

export default Banner
