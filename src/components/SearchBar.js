import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    return (
        <form id='searchForm' className="flex my-4">
            <input
                className="py-3 px-4 text-md rounded mr-2 flex-grow"
                type="text"
                placeholder="Search News"
                id="searchbar" />
            <button
                className="p-2 inline-flex items-center justify-center text-md rounded-sm min-w-150 font-semibold bg-indigo-600 text-white hover:bg-indigo-800 sm:min-w-100"
                type="button"
                for="searchbar"
                value="Search"
            // onClick={(e) => console.log(e)}
            ><FaSearch className="inline-block mr-2" />Search</button>
        </form>
    )
}

export default SearchBar
