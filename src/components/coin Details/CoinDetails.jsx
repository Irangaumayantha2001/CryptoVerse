import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import axios from "axios";
import Header from "../header/Header";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { BaseUrl } from "../../util/baseUrl";
import { useParams } from "react-router-dom";
import "./coinDetail.css";
import CoinChart from "../CoinChart";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
    const [currency, setCurrency] = useState("usd");
  const { id } = useParams();
    const profit = coin.market_data?.price_change_percentage_24h > 0;   
  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(`${BaseUrl}/coins/${id}`);
        console.log(data);
        setCoin(data)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCoin();
  }, [id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-detail">
            <div className="coin-info">
              <div className="time">{coin.last_updated}</div>
              <div className="coin-img">
                <img src={coin.image.large} height={"120px"} alt="" />
              </div>
              <div className="coin-name">{coin.name}</div>
              <div className="coin-price">
                {coin.market_data.current_price[currency]}
              </div>
              <div className="coin-profit">
                {profit ? (
                  <BiSolidUpArrow color="green" />
                ) : (
                  <BiSolidDownArrow color="red" />
                )}
                {coin.market_data.price_change_percentage_24h} %
              </div>
              <div className="market-rank">{coin.market_cap_rank}</div>
              <div className="coin-discription">
                <p> {coin.description["en"].split(".")[0]} </p>
              </div>
            </div>
            <CoinChart currency={currency} />
          </div>
        </>
      )}
    </>
  );
};

export default CoinDetails;
