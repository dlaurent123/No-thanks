import React from "react";
import SearchDisplay from "../searchDisplay/SearchDisplay";
import { useSelector } from 'react-redux'

const SearchDisplayPage = () => {
  const searchResults = useSelector(state => state.search)
  const results = searchResults.map(result => {
    return <SearchDisplay result={result}/>
  })

  return (
    <div className={"resultIndex"}>
      <h2 id={"heading"}>Search Results</h2>
      {results}
    </div>
  )
};

export default SearchDisplayPage;
