import React, {useState, useEffect} from "react";

function Search({list, setList, plants}) {
  // const[input, setInput]= useState("")

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
    
        placeholder="Type a name to search..."
        onChange={(e) => {
          
          const newList = plants.filter((plant)=>{
            return plant.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
          })
          setList(newList)
          console.log(newList)         

        }
         
        }
      />
    </div>
  );
}

export default Search;
