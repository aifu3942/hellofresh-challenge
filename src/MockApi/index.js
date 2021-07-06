import axios from "axios";

//recipe detail information
export const DetailsInfo = async (id) => {
  var axios = require("axios").default;

  var options = {
    method: "GET",
    url:
      "https://webknox-recipes.p.rapidapi.com/recipes/" + id + "/information",
    headers: {
      "x-rapidapi-key": "681abf69aamsh57fd43f79e45c62p1c55b2jsn2ecc4ce9f64c",
      "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const FetchRecipes = async () => {
  const options = {
    method: "GET",
    url: "https://webknox-recipes.p.rapidapi.com/recipes/search",
    params: { query: "beef", number: "100" },
    headers: {
      "x-rapidapi-key": "681abf69aamsh57fd43f79e45c62p1c55b2jsn2ecc4ce9f64c",
      "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
};
