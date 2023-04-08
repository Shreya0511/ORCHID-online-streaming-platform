import React,{useState} from 'react'
import {FaSearch} from "react-icons/fa"


const Searchbar= ({setResults})=> {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  


  return (
      <div className="flex row border-solid border-2 w-96 rounded-full border-white-600 bg-gray-600">
        
        
        <FaSearch id="search-icon" className=" h-8"/>
          <input className="outline-none bg-gray-600" placeholder="  search your likes"  value={input}
        onChange={(e) => handleChange(e.target.value)}
          />
         
        </div>
        
  )
}

export default Searchbar
