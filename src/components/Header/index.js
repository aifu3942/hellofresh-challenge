import React from "react";
import logo from "../../Assets/Hello_Fresh_icon.png";
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.menuLogo} alt="logo" />
          <Button className={classes.btn} size="large" variant="outlined">
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
