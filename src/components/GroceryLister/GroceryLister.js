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
      localStorage.setItem("ingredients", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("ingredients"));
      setIngredients(todoLocal);
    }

    if (localStorage.getItem("recipes") === null) {
      localStorage.setItem("recipes", JSON.stringify([]));
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

      <h4 align="center"> Recipes </h4>

      <br></br>

      <div>
        <RecipeList recipes={recipes} />
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
