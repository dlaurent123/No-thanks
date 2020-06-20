import React from "react";
import '../css/SearchDisplay.css'
// This is the display component. For each result, which would be mapped through the Search Display page, It would be passed to this display component.
// Add a unique key for react to keep track of the result


const SearchDisplay = ({result}) => {
  let { id, name, image_url, review_count, rating, price, display_phone, categories } = result
  const storeLocation  = result.location 
  let { address1, address2, address3, city, zip_code, country, state, display_address } = storeLocation
  // const image = result.image_url
  // const name = result.name
  // const reviewCount = result.review_count
  // const rating = result.rating 
  // const price = result.price

  const handleClick = (id) => {
    //On click, fires the modal for that individual store
  }

  return (
    <div className={"restaurantCard"} key={id} value={id}>
      <div className={"basicInfo"}>
          <h2 id={"name"} onClick={() => handleClick(id)} value={id}>{name}</h2>
          <img src={image_url} alt={"Restaurant"} id={"image"}/>
          <h2 id={"address"}>Address: 
            {display_address[0]},
            {display_address[1]}
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
  )
};

export default SearchDisplay;
