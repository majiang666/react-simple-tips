import React from "react";
import "./Tips.css";
const Tips = ({ showFlag,location,distance,tipsMsg }) => {
  let styles = {};
  (location === 'center') ? 
    styles.location = {
      top: '50%',
      transform:'translateY(-50%)'
    } :
    styles.location = {
      [`${location ? location : 'bottom'}`]:(distance ? distance : '50px')
    }

  return(
    (showFlag ? showFlag : false) ? 
    (
      <div className="tips fadeInUp" style={ styles.location }>
        <span className="tips-box">
          {tipsMsg ? tipsMsg : '提示'}
        </span>
      </div>
    ) : 
    (
      null
    )
  )
};

export default Tips;