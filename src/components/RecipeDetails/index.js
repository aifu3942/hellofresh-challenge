import Header from "../Header";
import React, { useState } from "react";
import useStyles from "./styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DetailsInfo } from "../../MockApi";
import { Box, Typography } from "@material-ui/core";

function Scene() {
  const classes = useStyles();
  const location = useLocation();
  const [recipeId, setRecipeId] = useState(location.state.recipeId);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getData = async () => {
      setDetails(await DetailsInfo(recipeId));
      console.log(details);
    };
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <Box>
          <Typography></Typography>
        </Box>
      </div>
    </div>
  );
}

export default Scene;
