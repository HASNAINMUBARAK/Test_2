import React from 'react'
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import logo from "../../Assets/Images/logo.png";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import DrawerComponent from "../Drawer";
import { useState } from "react"; 
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {ClickAwayListener} from "@material-ui/core";

const Navbar = () => {
    const classes = useStyles()
    
  const [openDrawer, setopenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };
  const handleDrawerClose = () => {
    setopenDrawer(false);
  };
  const match = useMediaQuery("(max-width: 960px)");



  const [open1, setOpen1] = React.useState(false);
  const handleClick = () => {
    setOpen1((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen1(false);
  };


  return (
    <>
     <Grid container justifyContent='space-evenly' className={classes.contain}>
         <Grid item xs={4} sm={4} md={1} lg={1}>
        <Link to="/" > <img src={logo} alt=" " className={classes.logo}/> </Link>
         </Grid>

         <Grid item container direction="row" xs={4} sm={4} md={6} lg={5}
          className={classes.anchors_container}>
             
         {match ? (
          <Grid item xs={4} sm={4} container justifyContent="center">
            <IconButton className="humberger" onClick={handleDrawerOpen}>
              <MenuIcon className={classes.humberger}  />
            </IconButton>
          </Grid>
        ) : (<>
      
      <Link to="/" className={classes.anchors} >
             <h4  >Curated Drops</h4>
                 </Link>
                 <Link to="/contact" className={classes.anchors}>
             <h4 >Verified Drops</h4>
                 </Link>
                 <Link to="/contact" className={classes.anchors}>
             <h4 >Market Place</h4>
                 </Link>
                 <Link to="/activity" className={classes.anchors}>
             <h4   >Activity</h4>
                 </Link>

      </>)}
    <DrawerComponent
      openDrawer={openDrawer}
      handleDrawerClose={handleDrawerClose}
    />
         </Grid>
         <Grid item container xs={2} sm={3} md={3} lg={3} className={classes.third_div}>
         <Link to="/" className={classes.anchors} >
            
         <ClickAwayListener onClickAway={handleClickAway}>
                  <div className={classes.root}>
                    <Link
                      to="/company"
                      type="button"
                      className={classes.link}
                      onClick={handleClick}
                      style={{ background: "#192C30" }}
                    >
                      Company <ArrowDropDownIcon />
                    </Link>
                    {open1 ? (
                      <div className={classes.dropdown}>
                        <p> What is an NFTs?</p>
                        <p> What is an NFTs?</p>
                        <p> What is an NFTs?</p>
                      </div>
                    ) : null}
                  </div>
                </ClickAwayListener>
            
                 </Link>
             <SearchIcon className={classes.search_icon} />
         </Grid>

         <Grid item  container xs={2} sm={2} md={3} lg={3} className={classes.btns}>
             <button className={classes.btn1}>Log In</button>
             <button className={classes.btn2}>Sign Up</button>
         </Grid>
         
         </Grid>   
    </>
  )
}
const useStyles = makeStyles((theme)=>({
 contain: {
     background: "#192c30",
     padding: "24px 20px",
     [theme.breakpoints.down("sm")]:{
         
      },
 },
 logo: {
     width: 80,
     height: 60,
 },
 anchors_container: {
    justifyContent: "space-evenly",
    display: "flex",
    "& h5": {
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    },
    "& a": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]:{
      order:4,
    },
    [theme.breakpoints.down("md")]:{
      display: "flex",  
      justifyContent: "flex-end",
      },
     
    
 },
 anchors: {
   display: "flex",
   alignItems: "center",
     textDecoration: "none",
     color:"white",
 },
 third_div: {
     alignItems: "center",
     justifyContent: "space-evenly",
     [theme.breakpoints.down("md")]:{
        display:"none",
 },
 },
 search_icon: {
     color: "white"
 },
 btns: {
     alignItems: "center",
     justifyContent: "space-evenly",
     [theme.breakpoints.down("md")]:{
        display:"none",
 },
},
 btn1: {
     width: 80,
     height: 40,
     color: "white",
     background: "#192c30",
     borderRadius: 20,
     border: "1px solid white",
     "&:hover": {
        border: "2px solid white",
        cursor: "pointer",
    },

 },
 btn2: {
    width: 80,
    height: 40,
    color: "#192c30",
    background: "white",
    borderRadius: 20,
    border: "1px solid #192c30",
    "&:hover": {
        border: "2px solid white",
        cursor: "pointer",
    },

},
last_grid: {
    display: "flex",
    justifyContent: "space-evenly",
    "& h5": {
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    },
    "& a": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]:{
      order:4,
    },
   
  },
  humberger: {
      color: "white",
  },


  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    width: "120px",
    border:"1px solid ",
    borderRadius: "10px",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    padding: 15,
    backgroundColor: "#192c30",
  },
  link: {
    display: "flex",
    alignItems: "center",
    color: "white",
    textDecoration: "none",

  },

 }))
export default Navbar;