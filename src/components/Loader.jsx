import React from 'react'
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
       display:'flex',
      //  alignItems:'center',
       justifyContent:'center',
       top:'50%'
      }}
    >
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
      />
    </div>
  );
}

export default Loader
