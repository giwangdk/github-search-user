import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
    return (
        <div className="bg-white p-2 rounded-xl  sm:rounded-2xl shadow-lg my-4 flex justify-between items-center">
          <div className="w-50 mx-3">
          <FontAwesomeIcon icon={faSearch} size="xl" />
        </div>
        <input type="text" name="" id="" placeholder="Search Github username" className="p-2 outline-blue-200 mr-2 flex-1" />
        <button className="bg-blue-500 text-white font-semibold py-2 px-3  sm:py-3 sm:px-4 sm:rounded-xl border-0 rounded-lg hover:bg-blue-400 shadow-black">Search</button>
      </div>

        );
}

export default Search;
