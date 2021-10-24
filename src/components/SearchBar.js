import React, { useRef, useCallback, useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAppContext } from '../context'

function SearchBar() {
    const { searchFromSearchBar } = useAppContext()
    const ref = useRef(null)



    const onSearchSubmit = async (e) => {
        e.preventDefault()
        if (ref.current.value) {
            await searchFromSearchBar(ref.current.value)
            ref.current.value = null
        }
    }

    // useEffect(() => {
    //     console.log();
    // }, [key ])

    return (
        <form id='searchForm' className="flex my-4">
            <input
                ref={ref}
                className="py-3 px-4 text-md rounded mr-2 flex-grow"
                type="text"
                placeholder="Search News"
                id="searchbar"
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        onSearchSubmit(e)
                    }
                }}
            />
            <button
                className="p-2 inline-flex items-center justify-center text-md rounded-md min-w-150 font-semibold bg-indigo-600 dark:bg-indigo-300 dark:text-gray-900 text-white dark:hover:bg-indigo-200 hover:bg-indigo-700 sm:min-w-100"
                type="button"
                for="searchbar"
                value="Search"
                onClick={(e) => onSearchSubmit(e)}
            ><FaSearch className="inline-block mr-2" />Search</button>
        </form>
    )
}

export default SearchBar
