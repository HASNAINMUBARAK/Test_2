import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core";

const DrawerComponent = ({ openDrawer, handleDrawerClose }) => {
  const classes = useStyles()
  return (
    <>
      <Drawer anchor="top" open={openDrawer}  >
        <List className={classes.left_drawer}>
          <ChevronLeftIcon onClick={handleDrawerClose} />
          <ListItem divider button>
            <ListItemText>Curated Drops</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>Verified Drops</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>Market Plac</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>Activity</ListItemText>
          </ListItem>
          <ListItem divider button>
          <button className={classes.btn1}>Log In</button>
             <button className={classes.btn2}>Sign Up</button>

          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
const useStyles = makeStyles((theme)=>({
  left_drawer: {
    background: "#192c30",
    color: "white",
  },
  btn1: {
    width: 80,
    height: 40,
    color: "white",
    background: "#192c30",
    borderRadius: 20,
    border: "1px solid white",
    margin: 10,
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
}))
export default DrawerComponent;