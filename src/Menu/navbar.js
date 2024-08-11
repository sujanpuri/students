import React from "react";
import { useState } from "react";


export default function Navbar(){
    const [sort, setsort] = useState('rank');

    function HandleSelect(e) {
        const selectedValue = e.target.value;
        setsort(selectedValue);
    }
    return(
        <div>
            <nav className="w-full flex flex-row items-center justify-between bg-blue-400 fixed top-0 h-14">
                <div className="font-bold text-3xl m-1">
                    Student Details
                </div>
                <div className="flex flex-row items-center">
                    <button className="m-3">Sort:</button>
                        <select onChange={HandleSelect}>
                            <option value="rank">Rank</option>
                            <option value="name">Name</option>
                            <option value="age">Age</option>
                        </select>
                    <input placeholder="Search" type="search" className="m-3 mr-0 p-1"/>
                    <button className="bg-white text-black ml-0"><img src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png" className="h-8" alt="Search"/></button>
                    <button className="m-3"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="h-8 rounded-2xl" alt="Code" /></button>
                </div>
            </nav>
        </div>
    )
}