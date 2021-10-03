import React, { useEffect, useRef } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { gsap } from "gsap"

function Loader() {


    return (
        <div className=" mt-12 w-full h-full flex justify-center">
            <div className="relative h-32 w-32">
                <div className="loader text-indigo-400 absolute h-32 w-32 grid place-content-center ">
                    <AiOutlineLoading3Quarters className=" h-16 w-full" />
                </div>
                <div className="loader text-indigo-600 absolute h-32 w-32 grid place-content-center">
                    <AiOutlineLoading3Quarters className=" h-24 w-full transform rotate-120" />
                </div>
                <div className="loader text-indigo-800 absolute h-32 w-32 grid place-content-center">
                    <AiOutlineLoading3Quarters className=" h-32 w-full transform rotate-240" />
                </div>
            </div>
        </div >

    )
}

export default Loader
