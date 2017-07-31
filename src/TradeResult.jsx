import React, { Component } from 'react';

export const TradeResult = (props) => {
  const points = props.teamOnePoints - props.teamTwoPoints

  const renderImage = () => {
    if (points > 0) {
      return <img className="thumbsUp"src ="http://clipartix.com/wp-content/uploads/2016/04/Thumbs-up-clipart-2.png"></img>
    }else {
      return <img src ="http://clipartix.com/wp-content/uploads/2017/06/Hand-stop-sign-clipart-2.png"></img>
    }
  }

  const message = () => {
    if (points > 0) {
      return `This trade would result in an increase of ${points} points for your team`
    }else {
      return `This trade would result in a decrease of ${Math.abs(points)} points for your team`
    }
  }

  console.log(props)
  return (
    <div className="absolute">
      <div className="children">
        <div>
          {renderImage()}
        </div>
        <div>
          <h1 className="message">{message()}</h1>
        </div>
        <div>
          <button className="button"
                onClick={props.onClick}>
                Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
