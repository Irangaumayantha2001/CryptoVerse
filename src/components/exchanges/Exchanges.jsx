import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import  {BaseUrl}  from "../../util/baseUrl";
import Loader from "../Loader";
import './exchanges.css'

const Exchanges = () => {
  const[loading,setLoading]=useState(true);
  const[exchanges,setExchanges]=useState([])
  useEffect(() => {
    const getExchangeData = async () => {
      try {
        const { data } = await axios.get(`${BaseUrl}/exchanges`, {
          headers: {
            "x-cg-demo-api-key": "CG-oZSwYEpjpq2SuweeK5vsDoRt	",
          },
        });
        console.log(data);
        setExchanges(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching exchange data:", error);
        setLoading(false); 
      }
     
    };
    getExchangeData();
  },[]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div>
           {
            exchanges.map((item,i) =>{
              return (
                <div className="ex-card">
                  <div className="img">
                    <img src={item.image} alt="" height={"75px"} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="price">
                    {item.trade_volume_24h_btc.toFixed(2)}
                  </div>
                  <div className="rank">{item.trust_score_rank}</div>
                </div>
              );
            })
           }
          </div>
        </>
      )}
    </>
  );
};

export default Exchanges;
