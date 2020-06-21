import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingState, setIsLoading } from "../isLoading/loadingSlice";
import Search from '../search/Search'

const Home = () => {
  const isLoading = useSelector(loadingState);
  const dispatch = useDispatch();
  const unmount = () => dispatch(setIsLoading(!isLoading));

  useEffect(() => {
    return unmount;
  });

  return (
    isLoading ? (   
    <div>
      <Search/>
      Loading.....
      </div>
    ) : (
    <div>
      <Search/>
      Home
      </div>
    )
  )
};

export default Home;
