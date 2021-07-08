import Header from "../../components/Header";
import HomePage from "../../components/HomePage";
import React from "react";
import useStyles from "./styles";

function Scene() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <HomePage />
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
}

export default Scene;
