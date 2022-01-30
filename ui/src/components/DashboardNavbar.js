import React, {useContext} from "react";

import { Context } from "./../context/Context";

import {  Box, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";

const DashboardNavbar = () => {

  const {dispatch} = useContext(Context)

  const handleLogout = ()=> dispatch({type:"LOGOUT"});

  return (
    <div style={classes.Navbar}>
      <Box style={classes.Box}>
        <Badge
          badgeContent={1}
          color="secondary"
          variant="standard"
          style={{ cursor: "pointer" }}
        >
          <NotificationsIcon />
        </Badge>

        <InputIcon style={{ cursor: "pointer" }} onClick={handleLogout} />
      </Box>
    </div>
  );
};

export default DashboardNavbar;

const classes = {
  Navbar: {
    backgroundColor: "#2109AE",
    color: "#fff",
    borderBottom: "1px solid #ccc",
    padding: 20,
    height: "10vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Box: {
    width: 80,
    display: "flex",
    justifyContent: "space-between",
  },
};
