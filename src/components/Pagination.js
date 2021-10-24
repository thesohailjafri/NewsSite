import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'
export default function Pagination({ pageTotal, pageNumber, setPageNumber }) {



    return (
        <div className=" px-4 pt-3 flex items-center justify-between  sm:px-6">

            <div className=" mx-auto flex items-center sm:justify-between">

                <button
                    disabled={pageNumber <= 10}
                    onClick={() => setPageNumber(pageNumber - 10)}
                    className={pageNumber <= 10 ?
                        "cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-red-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"
                        :
                        "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"}>
                    <FiChevronsLeft className="h-5 w-5 inline" aria-hidden="true" />
                </button>
                <button
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                    className={pageNumber === 1 ?
                        "cursor-not-allowed relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-red-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"
                        :
                        "relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"}>
                    <FiChevronLeft className="h-5 w-5 inline" aria-hidden="true" />Prev
                </button>

                <button disabled
                    className="relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white  text-sm font-medium text-indigo-600 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700 "
                >Page No. {pageNumber}</button>

                <button
                    disabled={pageNumber + 1 === pageTotal}
                    onClick={() => setPageNumber(pageNumber + 1)}
                    className={pageNumber + 1 === pageTotal ?
                        "cursor-not-allowed relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-red-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"
                        :
                        "relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-indigo-600  hover:bg-gray-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"}>
                    Next<FiChevronRight className="h-5 w-5 inline" aria-hidden="true" />
                </button>
                <button
                    disabled={pageNumber + 10 > pageTotal}
                    onClick={() => setPageNumber(pageNumber + 10)}
                    className={pageNumber + 10 >= pageTotal ?
                        "cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-red-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700"
                        :
                        "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50 dark:text-indigo-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:bg-gray-700 "}>
                    <FiChevronsRight className="h-5 w-5 inline" aria-hidden="true" />
                </button>



            </div>
        </div >
    )
}