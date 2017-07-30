import React, { Component } from 'react';

export const TradeResult = (props) => {
  console.log(props)
  return (
    <div className="absolute">
      <h1 className="result">Hello</h1>
      <button className="button reset-trade" onClick={() => console.log('firedddd')}>Restart</button>
    </div>
  )
}
