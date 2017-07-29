import React, { Component } from 'react';

export const EvaluateButton = (props) => {
  if (props.teamOne.length >= 1 && props.teamTwo.length >= 1) {
    return (
      <button className="button">Evaluate Trade</button>
    )
  } else {
  return <button className="button disabled">Evaluate Trade</button>
  }
}
