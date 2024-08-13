import React from "react";
import { useState } from "react";
import Data from "../Data";

export default function Navbar() {
  const [sort, setsort] = useState("rank");
  const [searchVal, setSearchVal] = useState('')

  function HandleSearch(e){
    const SearchData= e.target.value;
    setSearchVal(SearchData);
  }
  function HandleSelect(e) {
    const data = e.target.value;
    setsort(data);
  }
  return (
    <>
    <div>
      <nav className="w-full flex flex-row items-center justify-between bg-blue-300 fixed top-0 h-14">
        <div className="font-bold text-3xl m-1 pl-4">Student Details</div>
        <div className="flex flex-row items-center">
          <button className="m-3"><strong>Sort:</strong></button>
          <select onChange={HandleSelect} className="h-8 rounded-lg bg-gray-200">
            <option value="rank">Rank</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
          </select>
          <input onChange={HandleSearch} placeholder="Search" type="search" value={searchVal} className="m-3 mr-0 p-1 rounded-s-lg" />
          <button className="bg-gray-200 text-black ml-0 rounded-r-lg">
            <img
              src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png"
              className="h-8"
              alt="Search"
            />
          </button>
          <a
            href="https://github.com/sujanpuri/students"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="m-3 mr-6">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                className="h-8 rounded-2xl"
                alt="Code"
              />
            </button>
          </a>
        </div>
      </nav>
    </div>
    <Data recievedData={sort}/>
    </>
  );
}
