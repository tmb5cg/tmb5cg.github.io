import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GroceryLister.css";

const SubmitRecipeForm = (props) => {
  const inputRef = React.useRef(null);
  const handleTextboxChange = (event) => {
    props.setInputUrl(event.target.value);
  };

  const handleClick = () => {
    getIngredients(props.inputUrl);
  };

  const getIngredients = function (e) {
    if (isValidHttpUrl(props.inputUrl)) {
      console.log("yes");
      axios({
        method: "POST",
        url:
          "https://scanned-photo-split.herokuapp.com/getingredients?url=" +
          props.inputUrl,
        // url: "http://127.0.0.1:5000/getingredients?url=" + url,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response.data);
          // insert useeffect here
          var newIngredients = [];
          for (let i = 0; i < response.data.ingredients.length; i++) {
            // var newIngredient = createData(Math.random() * 1000, response.data.name, response.data.ingredients[i])
            var newIngredient = createData(
              props.inputUrl,
              Math.random() * 1000,
              response.data.name,
              response.data.ingredients[i],
              response.data.detailed[i]["name"],
              response.data.detailed[i]["qty"],
              response.data.detailed[i]["unit"]
            );

            newIngredients.push(newIngredient);
          }
          props.setIngredients(props.ingredients.concat(newIngredients));
          var rec = createRecipe(
            props.inputUrl,
            response.data.name,
            response.data.servings
          );
          props.setRecipes([...props.recipes, rec]);
        })
        .catch(function (response) {
          console.log("error");
        });
    } else {
      console.log("invalid");
    }
  };

  const clearIngredients = () => {
    localStorage.setItem("ingredients", JSON.stringify([]));
    localStorage.setItem("recipes", JSON.stringify([]));
    props.setIngredients([]);
    props.setRecipes([]);
  };
  return (
    <div>
      <form
        className="submit-recipe-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Recipe URL"
          onChange={handleTextboxChange}
        />
        <button className="button-submit" onClick={handleClick}>
          Fetch ingredients
        </button>
        <button className="button-clear" onClick={clearIngredients}>
          Clear ingredients
        </button>
      </form>
    </div>
  );
};

function createData(
  recipeId,
  ingredientId,
  recipeTitle,
  rawIngredientText,
  cleanIngredient,
  amount,
  unit
) {
  // return { url, name, ingredient, qty, unit };
  return {
    recipeId,
    ingredientId,
    recipeTitle,
    rawIngredientText,
    cleanIngredient,
    amount,
    unit,
  };
}

function createRecipe(url, title, servings) {
  // return { url, name, ingredient, qty, unit };
  return {
    url,
    title,
    servings,
  };
}

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

export default SubmitRecipeForm;
