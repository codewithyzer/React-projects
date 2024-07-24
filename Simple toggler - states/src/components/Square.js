import React from "react";

export default function Square(props) {
  const styles = {
    backgroundColor: props.on ? '#F5F5F5': 'transparent'
  }

  return (
    <button className="square" style={styles} onClick={props.toggle}></button>
  )
}