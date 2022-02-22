import React from 'react';
import Card2 from "../Card2";
import {data2} from "../../Data";
import "./styles.css";
const Map2 = () => {
  return <>
   
  <div className='section-card'>
      {data2.map((menuItem) => {
      return <Card2 menuItem= {menuItem} />
      })}
  </div>

  </>
};

export default Map2;
