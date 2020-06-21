import React, { useState, useEffect } from "react";
import SearchDisplay from "../searchDisplay/SearchDisplay";
import ModalDisplay from "../modal/ModalDisplay";
import { useSelector } from "react-redux";
import { searchRes } from "../search/searchSlice";
import { useHistory } from "react-router-dom";
import { modalState } from "../modal/modalSlice";
import Search from '../search/Search'
import '../css/SearchDisplayPage.css'
import Logo from '../../logos/a483ae61-c535-4189-a843-d1f8032a54df_200x200.png'

const SearchDisplayPage = () => {
  const [positiveResults, setPositiveResults] = useState([]);
  const searchResults = useSelector(searchRes);
  const isOpen = useSelector(modalState);
  const history = useHistory();

  //stretch feature idea 1:
  // filter buttons by price
  // make it a select box/check box, on selected filter through searchResults if the price is equal to "$", "$$" etc

  console.log(isOpen);
  useEffect(() => {
    return !searchResults.length ? history.push("/") : undefined;
  }, []);
  const results = searchResults.map((result) => {
    if (result.rating <= 2.9) {
      return <SearchDisplay key={result.id} result={result} />;
    }
  });

  return (
    <>
    <Search/>
      <div className={"resultIndex"}>
        <div class={"topHeader"}>
        <img src={Logo} alt={"black"} id={"logo"}/>
        <h2 id={"heading"}>Search Results</h2>
        </div>
        {results}
      </div>
      <ModalDisplay />
    </>
  );
};

export default SearchDisplayPage;
