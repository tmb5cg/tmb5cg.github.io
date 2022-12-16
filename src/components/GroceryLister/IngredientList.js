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

const IngredientList = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Recipe</TableCell>
              <TableCell align="right">Detailed ingredient</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Units</TableCell>
              <TableCell align="center">Ingredient</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.ingredients.map((row) => (
              <TableRow
                key={row.ingredientId}
                recipeid={row.recipeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.recipeTitle}</TableCell>
                <TableCell align="right">{row.rawIngredientText}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.unit}</TableCell>
                <TableCell align="center">{row.cleanIngredient}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default IngredientList;
