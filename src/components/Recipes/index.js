import React, { useEffect } from "react";
import routes from "../../routes";
import { useHistory } from "react-router-dom";
import { FetchRecipes } from "../../MockApi";
import rercipesData from "./recipesData.json";
import {
  GridList,
  GridListTile,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import { Rating, Pagination } from "@material-ui/lab";
import RecipeDetails from "../RecipeDetails";

function Recipes() {
  const classes = useStyles();
  const history = useHistory();
  const baseUri = "https://spoonacular.com/recipeImages/";

  useEffect(() => {
    async function getData() {
      // FetchRecipes();
    }
    getData();
  }, []);

  return (
    <div>
      <div id="Grid-intro" className={classes.intro}>
        <div>
          <Typography variant="h4" color="textPrimary">
            Recipes for All Tastes and Occasions
          </Typography>
        </div>
        <br />
        <div>
          <Typography variant="subtitle1" color="textPrimary">
            In this collection of tried and tested HelloFresh recipes, you’ll
            find a mix of old classics, exciting fusion recipes and dishes from
            around the world. There’s no shortage of delicious recipes everyone
            will love, all made in just six easy steps.
          </Typography>
        </div>
      </div>
      <Divider />

      <div id="Grid-recipes">
        <GridList cellHeight="auto" cols={3}>
          {rercipesData.map((recipe) => (
            <GridListTile key={recipe.id}>
              {/* <img src={baseUri + recipe.image} alt={recipe.title} /> */}
              <Card className={classes.cards}>
                <CardActionArea
                  onClick={() => {
                    history.push({
                      pathname: `${routes.recipeDetails.url}`,
                      state: { recipeId: `${recipe.id}` },
                    });
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image={baseUri + recipe.image}
                    title={recipe.title}
                  />
                  <CardContent>
                    <Typography variant="body1" color="textPrimary">
                      {recipe.title}
                    </Typography>
                    <Rating name="read-only" value={5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div>
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
}

export default Recipes;
