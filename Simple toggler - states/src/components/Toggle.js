import React, { useState } from "react";
import squaresData from '../data';
import Square from "./Square";

export default function Toggle() {
  const [squares, setSquares] = useState(squaresData);
  
  const squaresElement = squares.map((square) => {
    return (
      <Square
        key = {square.id}
        on = {square.on}
        toggle = {() => toggle(square.id)}
      />
    )
  })

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        if (square.id === id) {
          return {
            ...square,
            on: !square.on
          }
        } else {
          return square
        }
      });
    });
  }

  return (
    <div className="toggle-container">
      <h1 className="title">Simple Toggler</h1>
      { squaresElement }
    </div>
  )
}