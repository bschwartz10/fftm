import React from 'react';

export const TradeResult = (props) => {
  const points = props.teamOnePoints - props.teamTwoPoints

  const renderImage = () => {
    if (points > 0) {
      return <img className="thumbsUp" src="http://clipartix.com/wp-content/uploads/2016/04/Thumbs-up-clipart-2.png" alt="thumbsUp" ></img>
    }else {
      return <img className="thumbsDown" src="https://3.bp.blogspot.com/-rPMwaBzdMH4/WIoM-p-JuQI/AAAAAAAAJdY/Qx7pdjbgxH4Hlf9_l9rsfuDU4yi9Im_xACLcB/w800-h800/08_thumbs_down-3-512.png" alt="thumbsDown"></img>
    }
  }

  const message = () => {
    if (points > 0) {
      return `This trade would result in an increase of ${points} points for your team`
    }else {
      return `This trade would result in a decrease of ${Math.abs(points)} points for your team`
    }
  }

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
          <button className="button buttonLarge"
                onClick={props.onClick}>
                Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
