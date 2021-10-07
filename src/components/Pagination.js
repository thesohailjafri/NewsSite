import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'
export default function Pagination({ pageTotal, pageNumber, setPageNumber }) {



    return (
        <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

            <div className=" mx-auto flex items-center sm:justify-between">
                <button
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                    className={pageNumber === 1 ?
                        "cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-red-50"
                        :
                        "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50"}>
                    <ChevronLeftIcon className="h-5 w-5 inline" aria-hidden="true" />Prev
                </button>


                <button
                    disabled={pageNumber + 1 === pageTotal}
                    onClick={() => setPageNumber(pageNumber + 1)}
                    className={pageNumber + 1 === pageTotal ?
                        "cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-red-50"
                        :
                        "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50"}>
                    <ChevronRightIcon className="h-5 w-5 inline" aria-hidden="true" />Next
                </button>

            </div>
        </div >
    )
}