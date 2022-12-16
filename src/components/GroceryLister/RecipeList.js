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

const RecipeList = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Recipe</TableCell>
              <TableCell align="center">URL</TableCell>
              <TableCell align="center">Servings</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.recipes.map((recipe) => (
              <TableRow
                key={recipe.url}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{recipe.title}</TableCell>
                <TableCell align="left">{recipe.url}</TableCell>
                <TableCell align="left">{recipe.servings}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecipeList;
