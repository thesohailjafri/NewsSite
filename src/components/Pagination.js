import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'
export default function Pagination({ pageTotal, pageNumber }) {

    const pages = [
        {
            isPage: true,
            pageNo: pageNumber
        },
        {
            isPage: true,
            pageNo: pageNumber + 1
        },
        {
            isPage: false,
            pageNo: '...'
        },
        {
            isPage: true,
            pageNo: pageTotal - 1
        },
        {
            isPage: true,
            pageNo: pageTotal
        },

    ]

    return (
        <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

            <div className=" mx-auto flex items-center sm:justify-between">

                <Link
                    href="#"
                    className=" relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50"
                >
                    <span className="sr-only">Next</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
                {
                    pages.map((val, i) => {
                        return (
                            <Link
                                href="#"
                                className={`${val.isPage ?
                                    "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-semibold hover:text-indigo-600"
                                    :
                                    "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"}
                                    `}
                            >
                                {val.pageNo}
                            </Link>
                        )
                    })
                }

                <Link
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50"
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </Link>

            </div>
        </div>
    )
}