import React, { Component } from 'react';

export const EvaluateButton = (props) => {
  if (props.teamOne.length >= 1 && props.teamTwo.length >= 1) {
    return (
      <div>
        <button className="button">Evaluate Trade</button>
        <button className="button reset-trade" onClick={() => props.onClick()}>
          Reset Trade
        </button>
      </div>
    )
  } else {
      return (
        <div>
          <button className="button disabled">Evaluate Trade</button>
          <button className="button disabled reset-trade">Reset Trade</button>
        </div>
      )
  }
}
