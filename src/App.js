import "./App.css";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import HomeScene from "./Scene/Home";
import MenuScene from "./Scene/Menu";
import RecipesScene from "./Scene/Recipes";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomeScene />} />
        <Route exact path={routes.menu.url} render={() => <MenuScene />} />
        <Route
          exact
          path={routes.recipes.url}
          render={() => <RecipesScene />}
        />
        <Route
          exact
          path={routes.recipeDetails.url}
          render={() => <RecipeDetails />}
        />
      </Switch>
    </div>
  );
}

export default App;
