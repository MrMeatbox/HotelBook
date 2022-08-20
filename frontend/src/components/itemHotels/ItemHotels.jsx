import React from "react";
import { Link } from "react-router-dom";
import "./itemhotels.css";

const ItemHotels = ({ item }) => {
  return (
    <div className="itemHotels">
      <div className="itemHotelsCol">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="itemHotelsCol">
        <div className="itemHotelDivs">
          <h2>{item.name}</h2>
          <br />
          <h3>{item.desc}</h3>
        </div>
        <div className="itemHotelsDivs">
          <div className="itemHotelDiv">
            <span className="rating">{item.rating}</span>
          </div>
          <div className="itemHotelDiv">
            <span>611 Reviews</span>
            <br />
            <span>Enjoy 10% discount on any card payments!</span>
          </div>
        </div>
      </div>
      <div className="itemHotelsCol">
        <div className="itemHotelsColDiv">
          <h2>${item.price.toFixed(2)}</h2>
        </div>
        <div className="itemHotelsColDiv">
          <span>Free Wi-Fi</span>
          <br />
          <span>Free Parking</span>
          <br />
          <span>Free Breakfast</span>
          <br />
        </div>
        <div className="itemHotelsColDiv">
          <Link to={`/hotels/${item._id}`}>
            <button>View Deal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemHotels;
