import React from 'react';
import heart from '../Images/heart.png';
import comment from '../Images/comment.png';

const LikeSection = props => {
  return (
    <div 
        key="likes" 
        onClick={props.incrementLike} 
    >
        <img src={heart}alt="heart"/>
        <img src={comment}alt="comment"/>
        <div>{props.likes}</div>
    </div>
  );
};

export default LikeSection;