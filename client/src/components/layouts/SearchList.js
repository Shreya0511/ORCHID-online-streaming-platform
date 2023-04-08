import React from 'react'

const SearchList=({results})=> {
  return (
    <div>
      {results.map((result,id)=>{
        return <div key={id}>{result.name}
        </div>}
      )}
    </div>
  )
}

export default SearchList
