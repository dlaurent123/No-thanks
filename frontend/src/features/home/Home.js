import React from "react";
import Search from "../search/Search";
const { API_KEY } = process.env;

const Home = () => {
  return (
    <div>
      Home
      <Search />
    </div>
  );
};

export default Home;
