import React from "react";
import "./Tips.css";
const Tips = ({ showFlag,location,distance,tipsMsg,times }) => {
  let styles = {};
  if(showFlag){
    setTimeout(() => {
      document.querySelector('.tips').remove();
    }, times && (typeof times === 'number')  ? times : 2000);
  }
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
      <div className="tips" style={ styles.location }>
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