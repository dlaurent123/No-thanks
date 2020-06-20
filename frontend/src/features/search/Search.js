import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { receiveSearch } from "../search/searchSlice";
const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
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
    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      dispatch(receiveSearch(res.data.businesses));
      history.push("/searchResults");
      debugger;
    } catch (err) {
      console.log(err);
    }
  };
  console.log(latitude, longitude);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="categories"
        value={term}
        placeholder="Search By Category"
        onChange={(e) => setTerm(e.currentTarget.value)}
      />
      <input
        className="location"
        value={location}
        placeholder="Search By City/Zipcode"
        onChange={(e) => setLocation(e.currentTarget.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
