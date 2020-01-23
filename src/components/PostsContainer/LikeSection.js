import React from 'react';

const LikeSection = props => {
  console.log(props);
  const setLikesTwo =() =>{
    props.setLikes(props.likes+1)
  }
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper" onClick = {()=>console.log('Hello')}>
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
      likes {props.likes}
      
      </p>
</div>
  )
};

export default LikeSection;


