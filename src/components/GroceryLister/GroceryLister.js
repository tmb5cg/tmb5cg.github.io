import * as React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";
import SubmitRecipeForm from "./SubmitRecipeForm";

const GroceryLister = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // const inputRef = React.useRef(null);

  useEffect(() => {
    getLocalIngredients();
  }, []);

  // if ingredients ever changes ie new ones, update local storage
  useEffect(() => {
    saveLocalIngredients();
  }, [ingredients, recipes]);

  const getLocalIngredients = () => {
    if (localStorage.getItem("ingredients") === null) {
      // localStorage.setItem("ingredients", JSON.stringify([]));

      // Set default ingredients for example
      localStorage.setItem("ingredients", JSON.stringify(ingredientsSample));
      setIngredients(ingredientsSample);
      console.log(ingredients);
    } else {
      console.log(localStorage.getItem("recipes"));
      let todoLocal = JSON.parse(localStorage.getItem("ingredients"));
      setIngredients(todoLocal);
    }

    if (localStorage.getItem("recipes") === null) {
      // localStorage.setItem("recipes", JSON.stringify([]));

      // Set default recipes
      localStorage.setItem("recipes", JSON.stringify(recipesSample));
      setRecipes(recipesSample);
    } else {
      let recipeLocal = JSON.parse(localStorage.getItem("recipes"));
      setRecipes(recipeLocal);
    }
  };

  const saveLocalIngredients = () => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  return (
    <div>
      <h3>Extract ingredients from any recipe URL</h3>
      <h4></h4>

      <div>
        <SubmitRecipeForm
          inputUrl={inputUrl}
          setInputUrl={setInputUrl}
          recipes={recipes}
          setRecipes={setRecipes}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </div>

      <div>
        <RecipeList
          recipes={recipes}
          setRecipes={setRecipes}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </div>

      <br></br>
      <br></br>
      <h4 align="center"> Ingredients </h4>
      <br></br>
      <div>
        <IngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </div>
    </div>
  );
};

export default GroceryLister;

var recipesSample = [
  {
    url: "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    title: "Butternut Squash Soup",
    servings: "4 servings",
  },
];

var ingredientsSample = [
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 610.6743458087444,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "2 tablespoons butter",
    cleanIngredient: "butter",
    amount: 2,
    unit: "tablespoons",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 125.08900550310598,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "1 small onion, chopped",
    cleanIngredient: "onion",
    amount: 1,
    unit: "",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 784.3132561982665,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "1 stalk celery, chopped",
    cleanIngredient: "celery",
    amount: 1,
    unit: "stalk",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 832.1174670868992,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "1 medium carrot, chopped",
    cleanIngredient: "carrot",
    amount: 1,
    unit: "",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 766.1003888684941,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "2 medium potatoes, cubed",
    cleanIngredient: "potatoes",
    amount: 2,
    unit: "",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 396.0414475158245,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "1 medium butternut squash - peeled, seeded, and cubed",
    cleanIngredient: "butternut squash",
    amount: 1,
    unit: "",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 499.19997095661193,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "1 (32 fluid ounce) container chicken stock",
    cleanIngredient: "chicken stock",
    amount: 19,
    unit: "",
  },
  {
    recipeId:
      "https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/",
    ingredientId: 230.59071678763377,
    recipeTitle: "Butternut Squash Soup",
    rawIngredientText: "salt and freshly ground black pepper to taste",
    cleanIngredient: "salt and freshly ground black pepper to",
    amount: 0,
    unit: "",
  },
];
