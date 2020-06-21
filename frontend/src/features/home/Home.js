import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingState, setIsLoading } from "../isLoading/loadingSlice";

const Home = () => {
  const isLoading = useSelector(loadingState);
  const dispatch = useDispatch();
  const unmount = () => dispatch(setIsLoading(!isLoading));

  useEffect(() => {
    return unmount;
  });

  return isLoading ? <div>Loading.....</div> : <div>Home</div>;
};

export default Home;
