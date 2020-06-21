import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingState, setIsLoading } from "../isLoading/loadingSlice";
import Search from "../search/Search"
import Footer from "./Footer"
import "../css/Home.css"

const Home = () => {
  const isLoading = useSelector(loadingState);
  const dispatch = useDispatch();
  const unmount = () => dispatch(setIsLoading(!isLoading));

  useEffect(() => {
    return unmount;
  });

  return isLoading ? <div>Loading.....</div> : 
<div className="title">
  <h1>No Thanks</h1>
  <div className="main-page">
  
    <div className="main-header">
      <div className="main-header-wrapper">
      
        <div className="nav-header">
          <nav className="main-nav">    
          </nav>
          <Search/>
          
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>;
  

  
  
};

export default Home;
