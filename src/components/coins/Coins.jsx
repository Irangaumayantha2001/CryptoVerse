import React, { useEffect, useState } from "react";
import "./coin.css";
import {  CoinsUrl } from "../../util/baseUrl";
import Loader from "../Loader";
import axios from "axios";
import Header from "../header/Header";
import { Link } from "react-router-dom";


const CoinCard=({coindata,i,id}) =>{
    const profit = coindata.price_change_percentage_24h > 0; 
return (
  <Link to={`/coins/${id}`} style={{ color: "white", textDecoration: "none" }}>
    <div key={i} className="ex-card">
      <div className="img">
        <img src={coindata.image} alt="" height={"80px"} />
      </div>
      <div className="name">{coindata.name}</div>
      <div className="price">{coindata.current_price.toFixed(2)}</div>
      <div className="name">{coindata.market_cap_rank}</div>
      <div
        style={profit ? { color: "green" } : { color: "red" }}
        className="name"
      >
        {profit
          ? "+" + coindata.price_change_percentage_24h.toFixed(2)
          : coindata.price_change_percentage_24h.toFixed(2)}{" "}
      </div>
    </div>
  </Link>
);
}



const Coins = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
      const getCoinsData = async () => {
        try {
          const { data } = await axios.get(`${CoinsUrl}`, {
            headers: {
              "x-cg-demo-api-key": "CG-oZSwYEpjpq2SuweeK5vsDoRt	",
            },
          });
          console.log(data);
          setCoins(data);
          setLoading(false);
          
        } catch (error) {
          console.error("Error fetching exchange data:", error);
          setLoading(false);
        }
      };
      getCoinsData();
    }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div
            style={{
              position: "relative",
              marginTop: "14%",
              paddingLeft: "10%",
            }}
          >
            <h1 style={{ color: "white" }}>All Coins</h1>
          </div>
          <div>
            {coins.map((coindata, i) => {
              return <CoinCard key={i} coindata={coindata} i={i} id={coindata.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
