import React from 'react'

function SearchBar() {
    return (
        <form id='searchForm' className="flex my-4">
            <input
                className="py-2 px-4 text-md border-2 border-gray-100 rounded-sm mr-2 flex-grow"
                type="text"
                placeholder="Search News"
                id="searchbar" />
            <input
                className="p-2 rounded-sm min-w-150 bg-indigo-400 text-white hover:bg-indigo-700 sm:min-w-100"
                type="button"
                for="searchbar"
                value="Search"
            // onClick={(e) => console.log(e)}
            />
        </form>
    )
}

export default SearchBar
