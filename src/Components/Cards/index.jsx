import React from 'react';
import Card from "../Card";
import {data} from "../../Data";
import { makeStyles } from '@material-ui/core';
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 780, itemsToShow: 2 },
  { width: 960, itemsToShow: 3 },
];
const Cards = () => {
    const classes = useStyles()
  return <>
   <h1 className={classes.heading}>Recent Curated Collections</h1>
   <p className={classes.para}>Hand selected and exclusively dropped on Nifty Gateway</p>
  <div className={classes.section_card} >
  <Carousel breakPoints={breakPoints} className={classes.carousel_css} >
      {data.map((menuItem) => {
      return (
      <div>
        <Card menuItem= {menuItem} />
      </div>
      )})}
      </Carousel>
  </div>

  </>
};
const useStyles = makeStyles((theme)=> ({
  heading: {
    padding: "0px 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 50px",
    },
  },
  section_card: {
        display: "flex",
         justifyContent:"center",
    },
    carousel_css: {
      width:"80%",
      wrapAround: "true",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    },
    para: {
        opacity: "0.7",
        padding: "0px 120px",
        [theme.breakpoints.down("sm")]: {
          padding: "0px 50px",
        },
    },
}))
export default Cards;