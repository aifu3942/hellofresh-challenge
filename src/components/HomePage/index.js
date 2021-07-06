import React from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import routes from "../../routes";
import { useHistory } from "react-router-dom";

function HomePage() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <Button
        className={classes.buttons}
        onClick={() => {
          history.push(`${routes.recipes.url}`);
        }}
      >
        Our Recipes
      </Button>
      <Button
        className={classes.buttons}
        onClick={() => {
          history.push(`${routes.menu.url}`);
        }}
      >
        Your Menu
      </Button>
    </div>
  );
}

export default HomePage;
