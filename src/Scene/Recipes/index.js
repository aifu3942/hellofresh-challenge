import Header from "../../components/Header";
import React from "react";
import useStyles from "./styles";
import Recipes from "../../components/Recipes";

function Scene() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <Recipes />
      </div>
    </div>
  );
}

export default Scene;
