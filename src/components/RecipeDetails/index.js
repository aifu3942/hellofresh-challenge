import Header from "../Header";
import React, { useState } from "react";
import useStyles from "./styles";
import { BindInfo } from "./service";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Box, Typography, CircularProgress, Divider } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

function Scene() {
  const classes = useStyles();
  const location = useLocation();
  const [load, setLoad] = useState(true);
  const [recipeId, setRecipeId] = useState(location.state.recipeId);
  const [details, setDetails] = useState();

  useEffect(() => {
    async function getData() {
      setDetails(await BindInfo(recipeId));
      setLoad(false);
    }
    getData();
  }, [recipeId]);

  return load ? (
    <CircularProgress className={classes.load} />
  ) : (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <Box className={classes.box}>
          <Box className={classes.detailimg}>
            <img src={details.image} alt={details.title} />
          </Box>
          <Box className={classes.info}>
            <div className={classes.lines}>
              <Typography variant="h4" align="left">
                {details.title}
              </Typography>
            </div>
            <div className={classes.lines}>
              <Typography variant="overline">Gluten-free:</Typography>

              {details.glutenFree ? <CheckRoundedIcon /> : <CloseRoundedIcon />}
            </div>
            <div className={classes.lines}>
              <Typography variant="body1">Health Score:</Typography>
              <Rating name="read-only" value={details.healthScore} readOnly />
            </div>
            <Divider />
            <div className={classes.lines}>
              <Typography variant="body1">
                Minutes: {details.cookingMinutes}
              </Typography>
            </div>
            <Divider />
            <div className={classes.lines}>
              <Typography variant="body1">Ingredients:</Typography>
            </div>
            <div className={classes.ingredients}>
              {details.extendedIngredients.map((ingredient) => (
                <div className={classes.lines}>
                  <CheckCircleOutlineIcon />
                  <Typography variant="overline">{ingredient.name}:</Typography>
                  <Typography variant="body2">{ingredient.original}</Typography>
                </div>
              ))}
            </div>
            <Divider />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Scene;
