import React from 'react'

function SearchBar() {
    return (
        <form id='searchForm' className="flex my-4">
            <input
                className="py-3 px-4 text-md rounded mr-2 flex-grow"
                type="text"
                placeholder="Search News"
                id="searchbar" />
            <input
                className="p-2 text-md rounded-sm min-w-150 bg-indigo-600 text-white hover:bg-indigo-700 sm:min-w-100"
                type="button"
                for="searchbar"
                value="Search"
            // onClick={(e) => console.log(e)}
            />
        </form>
    )
}

export default SearchBar
