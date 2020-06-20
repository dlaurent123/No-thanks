import React from "react";
import SearchDisplay from "../searchDisplay/SearchDisplay";
import { useSelector } from 'react-redux'

const SearchDisplayPage = () => {
  const searchResults = useSelector(state => state.search)


  //stretch feature idea 1:
  // filter buttons by price
  // make it a select box/check box, on selected filter through searchResults if the price is equal to "$", "$$" etc
  
  const results = searchResults.map(result => {
    if (result.rating < 3) {
      return <SearchDisplay result={result}/>
    } else {
      return <div><h1>No bad spots near you!!</h1></div>
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
