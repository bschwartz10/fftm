import React, { Component } from 'react';

export const EvaluateButton = (props) => {
  if (props.teamOne.length >= 1 && props.teamTwo.length >= 1) {
    return (
      <button>Two Players Added</button>
    )
  } else {
  return <button>No Players Added</button>
  }
}
