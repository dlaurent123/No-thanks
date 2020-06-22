import React, { useEffect } from "react";
import SearchDisplay from "../searchDisplay/SearchDisplay";
import ModalDisplay from "../modal/ModalDisplay";
import { useSelector } from "react-redux";
import { searchRes } from "../search/searchSlice";
import { useHistory } from "react-router-dom";

const SearchDisplayPage = () => {
  const searchResults = useSelector(searchRes);

  const history = useHistory();

  //stretch feature idea 1:
  // filter buttons by price
  // make it a select box/check box, on selected filter through searchResults if the price is equal to "$", "$$" etc

  // console.log(isOpen);
  useEffect(() => {
    return !searchResults.length ? history.push("/") : undefined;
  }, [searchResults.length, history]);

  const results = searchResults.map((result) => {
    if (result.rating <= 2.9) {
      return <SearchDisplay key={result.id} result={result} />;
    }
  });

  return (
    <>
      <div className={"resultIndex"}>
        <h2 id={"heading"}>Search Results</h2>
        {results}
      </div>
      <ModalDisplay />
    </>
  );
};

export default SearchDisplayPage;
