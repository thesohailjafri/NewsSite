import React from 'react'
import { imgError } from '../functions'

function Banner({ data }) {


    return (
        <div
            className=" w-full h-80 bg-cover relative overflow-hidden bg-black border-8 border-white rounded shadow-md
            lg:h-72 
             md:h-64 md:border-4
              sm:h-48 sm:border-4
        ">
            <img
                className="absolute w-full top-0 left-0 bg-cover"
                src={data.media}
                onError={(e) => imgError(e.target)}
                alt="" />

            <div id="shade"
                className="absolute w-full h-full opacity-30
            bg-gradient-to-b from-blue-50 to-black "
            ></div>

            {data && <p
                className="absolute text-white bottom-0 text-3xl uppercase font-bold p-3 pr-6 shadow-2xl font-sans
            sm:text-lg
            "
            >{data?.title}</p>}

        </div>

    )
}

export default Banner
