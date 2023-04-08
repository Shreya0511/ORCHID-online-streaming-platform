import React,{useState} from "react";

import Searchbar from "./Searchbar";
import SearchList from './SearchList';
const Navbar = () => {
    const [results,setResults]=useState([]);

    return (
       <div className="fixed w-full text-white flex justify-between p-4 bg-black">
        <div className="logo">
            <h1 className="text-2xl">O<span>R</span>CHID</h1>
        </div>
        
        <Searchbar setResults={setResults}/>

         <nav>
            <ul className="flex row flex space-x-1 ">
                <li></li>
                <li><button className="rounded-full px-4 py-1 bg-red-600">Login</button></li>
                <li><button className="rounded-full px-4 py-1 bg-red-600">SignUp</button></li>
            </ul>
         </nav>
         <SearchList results={results}/>
       </div>           
    )
}
export default Navbar