import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./city.css";

const City = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/bycity?cities=Bandarban,Rangamati,Cox'sBazar,Kuakata,Sajek,Raujan"
  );
  //console.log(data);

  return (
    <div className="cities">
      <h2 className="cityTitle">Explore Hotels</h2>
      <p className="cityDesc">These popular destinations have a lot to offer</p>
      <div className="cityImages">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/kg.jpg" alt="Kragujevac" />
                </div>
                <h4 className="cityImgTitle">Bandarban</h4>
                <span className="cityImgProperties">{data[0]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/bg.jpg" alt="Belgrade" />
                </div>
                <h4 className="cityImgTitle">Rangamati</h4>
                <span className="cityImgProperties">{data[1]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/ac.jpg" alt="Aleksandrovac Zupa" />
                </div>
                <h4 className="cityImgTitle">Cox's Bazar</h4>
                <span className="cityImgProperties">{data[2]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/le.jpg" alt="Leskovac" />
                </div>
                <h4 className="cityImgTitle">Kuakata</h4>
                <span className="cityImgProperties">{data[3]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/ns.jpeg" alt="Novi Sad" />
                </div>
                <h4 className="cityImgTitle">Sajek</h4>
                <span className="cityImgProperties">{data[4]} properties</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default City;
