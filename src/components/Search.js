import React from 'react'

const Search = ({setSearch}) => {
    const setSearchHandler = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className='search-div'>
            <input 
            onChange={setSearchHandler} className='search-input' type='text' placeholder='Search'
            />
        </div>
    )
}

export default Search
