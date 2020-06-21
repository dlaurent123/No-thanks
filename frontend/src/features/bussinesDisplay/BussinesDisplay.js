import React from "react";

const BussinesDisplay = () => {
  const display = (biz) => {
    biz.map((biz) => {
      return (
        <div>
          <h1>{biz.name}</h1>
          <img alt="" src={biz.imgage_url} />
          <span>{biz.rating}</span>
          <span>{biz.price}</span>
          <span>{biz.location.display_address[0]}</span>
        </div>
      );
    });
  };
  return <div>BussinesInfo Here</div>;
};

export default BussinesDisplay;
