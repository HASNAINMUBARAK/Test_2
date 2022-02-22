import React from 'react'
import { makeStyles } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const MarketPlace = () => {
  const classes = useStyles()
  return (
    <div >
      <div className={classes.outer}>
        <h1 className={classes.heading}>Marketplace</h1>
        <div className={classes.search_bar}>
          <input placeholder='Search Artist or Collection' className={classes.input_div}></input>
          <ArrowDropDownIcon />
        </div>
        </div>
    </div>
  )
}
const useStyles = makeStyles((theme)=>({
outer: {
  padding: "0px 120px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: 10,

  },
},
heading: {
  fontWeight: 600,
  fontSize: "3.5417rem",
  [theme.breakpoints.down("md")]: {
    fontWeight: 400,
  fontSize: "1.5rem",
  }
},
search_bar: {
  display: "flex",
  justifyContent: "space-between",
  margin: "0px 10px",
  border: "1px solid black",
  borderRadius: 5,
  width: 250,
  height: 40,
  alignItems: "center",
  padding: 3,
  [theme.breakpoints.down("md")]: {
    width: 200,
  height: 30,
  }
},
input_div: {
  border: "none",
  height: 30,
},
}))
export default MarketPlace