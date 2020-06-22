import React, { useEffect, useState } from "react";
// import { biz } from "./helper";
import { useSelector } from "react-redux";
import { bussinesState } from "../bussines/bussinesSlice";
import axios from "axios";
import BussinesHours from "./BussinesHours";
const API_KEY = process.env.REACT_APP_API_KEY;

const apiCall = async (bizId, setBiz, setReviews, setLocation, setHours) => {
  const bizz = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${bizId}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  setBiz(bizz.data);
  setLocation(bizz.data.location.display_address);
  setHours(bizz.data.hours[0].open);

  let reviews = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${bizId}/reviews`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  setReviews(reviews);
};

const BussinesDisplay = () => {
  const bizId = useSelector(bussinesState);
  const [biz, setBiz] = useState([]);
  const [location, setLocation] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [hours, setHours] = useState([]);

  // console.log(location.display_address[0]);

  // const { address1 } = addy;
  // console.log(address1);

  useEffect(() => {
    apiCall(bizId, setBiz, setReviews, setLocation, setHours);
  }, [bizId]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{biz.name}</h1>
      <img
        style={{ height: "160px", width: " 263px", borderRadius: "20px" }}
        alt=""
        src={biz.image_url}
      />
      <span>Rating {biz.rating}</span>
      <span>Price {biz.price}</span>
      <div>
        <h2>Location & Hours</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <BussinesHours hours={hours} />
          </div>
          <div
            style={{
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>{location[0]}</span>
            <span>{location[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinesDisplay;
