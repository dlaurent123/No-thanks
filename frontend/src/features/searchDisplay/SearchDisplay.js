import React from "react";

import { useDispatch, useSelector } from "react-redux";
import "../css/SearchDisplay.css";
import { updateModal, modalState } from "../modal/modalSlice";
import { setBussines } from "../bussines/bussinesSlice";
// This is the display component. For each result, which would be mapped through the Search Display page, It would be passed to this display component.
// Add a unique key for react to keep track of the result

const SearchDisplay = ({ result }) => {
  const {
    id,
    name,
    image_url,
    review_count,
    rating,
    price,
    display_phone,
    categories,
  } = result;
  const storeLocation = result.location;
  const { display_address } = storeLocation;

  const dispatch = useDispatch();
  const isOpen = useSelector(modalState);

  const handleClick = (e) => {
    dispatch(setBussines(e.target.title));
    dispatch(updateModal(!isOpen));
  };

  return (
    <div onClick={handleClick} className={"restaurantCard"} key={id} value={id}>
      <div className={"basicInfo"}>
        <h2 id={"name"} title={id} onClick={handleClick} value={id}>
          {name}
        </h2>
        <img src={image_url} alt={"Restaurant"} id={"image"} />
        <h2 id={"address"}>
          Address:
          {display_address[0]},{display_address[1]}
        </h2>
        <h2 id={"phone"}>Contact: {display_phone}</h2>
      </div>
      <div className={"information"}>
        <h2 id={"category"}>Category: {categories[0].title}</h2>
        <h2 id={"reviews"}>Reviews: {review_count}</h2>
        <h2 id={"rating"}>Rating: {rating}</h2>
        <h3 id={"price"}>Price: {price}</h3>
      </div>
    </div>
  );
};

export default SearchDisplay;
