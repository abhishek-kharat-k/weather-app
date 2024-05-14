import React from "react";

function Search({search, setSearch, handleSearch}){
    return(
        <div className="input-city">
            <input 
            type="text" 
            placeholder="Enter City Name"
            name="search"
            value={search}
            onChange={(event)=> setSearch(event.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;