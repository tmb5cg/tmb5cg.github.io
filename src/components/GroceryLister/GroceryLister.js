import * as React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";

function createData(id, name, ingredient, unit, qty) {
  return { id, name, ingredient, qty, unit };
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

const GroceryLister = () => {
  const [url, setUrl] = useState("");
  const [updated, setUpdated] = useState(url);
  const [ingredients, setIngredients] = useState([]);

  const inputRef = React.useRef(null);

  const handleTextboxChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClick = () => {
    setUpdated(url);
    getIngredients(updated);
  };

  const getIngredients = function (e) {
    if (isValidHttpUrl(url)) {
      console.log("yes");
      axios({
        method: "POST",
        url:
          "https://scanned-photo-split.herokuapp.com/getingredients?url=" + url,
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
              Math.random() * 1000,
              response.data.ingredients[i],
              response.data.detailed[i]["name"],
              response.data.detailed[i]["qty"],
              response.data.detailed[i]["unit"]
            );
            newIngredients.push(newIngredient);
          }
          setIngredients(ingredients.concat(newIngredients));
        })
        .catch(function (response) {
          console.log("error");
        });
    } else {
      console.log("invalid");
    }
  };

  return (
    <div>
      <h3>Extract ingredients from any recipe URL</h3>
      <h4>too much SEO content nowadays</h4>
      <form className="upload-container" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Recipe URL"
          onChange={handleTextboxChange}
        />
        <button className="button-70" onClick={handleClick}>
          Add ingredients
        </button>{" "}
      </form>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Clean Ingredient</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Original text from site</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {" "}
                    {row.ingredient}{" "}
                  </TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default GroceryLister;
