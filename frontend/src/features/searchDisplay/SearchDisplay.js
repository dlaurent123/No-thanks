import React from "react";

// This is the display component. For each result, which would be mapped through the Search Display page, It would be passed to this display component.
// Add a unique key for react to keep track of the result

const SearchDisplay = ({result}) => {
  let { id, name, image_url, review_count, rating, price, display_phone } = result
  const storeLocation  = result.location 
  let { address1, address2, address3, city, zip_code, country, state, display_address } = storeLocation
  // const image = result.image_url
  // const name = result.name
  // const reviewCount = result.review_count
  // const rating = result.rating 
  // const price = result.price
  return (
    <div className={"restaurantCard"} key={id} value={id}>
      <div className={"name"}>
          <h2>{name}</h2>
          <img src={image_url} alt={"Restaurant picture"}/>
          <h2>Address: 
            {display_address[0]},
            {display_address[1]}
          </h2>
          <h2>Contact: {display_phone}</h2>
      </div>
      <div className={"information"}>
          <h2>Reviews: {review_count}</h2>
          <h2>Rating: {rating}</h2>
          <h3>Price: {price}</h3>
      </div>
    </div>
  )
};

export default SearchDisplay;
