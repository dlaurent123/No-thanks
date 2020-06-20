import React, { useState } from "react";
import SearchDisplay from "../searchDisplay/SearchDisplay";
import { useSelector } from 'react-redux'

const SearchDisplayPage = () => {
  const [ positiveResults, setPositiveResults ] = useState([])
  const searchResults = useSelector(state => state.search)


  //stretch feature idea 1:
  // filter buttons by price
  // make it a select box/check box, on selected filter through searchResults if the price is equal to "$", "$$" etc
  
  const results = searchResults.map(result => {
    if (result.rating <= 2.9) {
      return <SearchDisplay result={result}/>
    } 
  })

  return (
    <div className={"resultIndex"}>
      <h2 id={"heading"}>Search Results</h2>
      {results}
    </div>
  )
};

export default SearchDisplayPage;
