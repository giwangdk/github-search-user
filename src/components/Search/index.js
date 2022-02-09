import React, { useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({action}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    action(value)
  }

    return (
        <div className="bg-white dark:bg-slate-700 p-2 rounded-xl  sm:rounded-2xl shadow-lg my-4 flex justify-between items-center">
          <div className="w-50 mx-3">
          <FontAwesomeIcon icon={faSearch} size="xl" />
        </div>
        <input type="text" name="" id="" placeholder="Search Github username" className="p-2 outline-blue-200 mr-2 flex-1 dark:bg-slate-700" onChange={handleChange} />
        <button className="bg-blue-500 text-white font-semibold py-2 px-3  sm:py-3 sm:px-4 sm:rounded-xl border-0 rounded-lg hover:bg-blue-400 shadow-black" onClick={handleSubmit} type="submit" >Search</button>
      </div>

        );
}

export default Search;
