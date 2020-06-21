import React, { useState, useEffect } from "react";
import SearchDisplay from "../searchDisplay/SearchDisplay";
import ModalDispaly from "../modal/ModalDisplay";
import { useSelector } from "react-redux";
import { searchRes } from "../search/searchSlice";
import { useHistory } from "react-router-dom";

const SearchDisplayPage = () => {
  const [positiveResults, setPositiveResults] = useState([]);
  const searchResults = useSelector(searchRes);
  const history = useHistory();

  //stretch feature idea 1:
  // filter buttons by price
  // make it a select box/check box, on selected filter through searchResults if the price is equal to "$", "$$" etc

  useEffect(() => {
    return !searchResults.length ? history.push("/") : null;
  });
  const results = searchResults.map((result) => {
    if (result.rating <= 3) {
      return <SearchDisplay result={result} />;
    }
  });

  return (
    <>
      <div className={"resultIndex"}>
        <h2 id={"heading"}>Search Results</h2>
        {results}
      </div>
      <ModalDispaly />
    </>
  );
};

export default SearchDisplayPage;
