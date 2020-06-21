import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveSearch } from "../search/searchSlice";
import { loadingState, setIsLoading } from "../isLoading/loadingSlice";
import "../css/Search.css"
const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const isLoading = useSelector(loadingState);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(location);

  const locationURL = () => {
    if (location) {
      return `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=50`;
    } else {
      return `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&limit=50`;
    }
  };

  const searchLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchLocation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = locationURL();
    dispatch(setIsLoading(!isLoading));
    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: `Bearer 8qnMAZ-CZ90tKgmGIL0GXzVK-teEHMAmfu0f-NlSKYgA-dSxs5WzkUz5DEu293l2ccgEUx9VMFEB3rMRMGXh0d7uU2cuybWSC91zVpq7-1l7Zq8LXBzoMVe9L8XvXnYx`,
        },
      });
      dispatch(receiveSearch(res.data.businesses));
      history.push("/search");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(latitude, longitude);

  return (
    <form onSubmit={handleSubmit} className="search">
    <div className="container">
      <div className="left-side">
        <input className="field-request" placeholder="Search By Cuisine" value={term} onChange={(e)=>setTerm(e.currentTarget.value)}/>
      </div>
      <div className="right-side">
      <input className="field-location" placeholder="Search By City/Zipcode" value={location} onChange={(e)=>setLocation(e.currentTarget.value)}/>
      </div>
      <button type="submit" className="btn">Submit</button>
    </div>
    </form>
  );
};

export default Search;
