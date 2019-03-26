import React from 'react';

const PostHeader = props => {
    return(
        <div className="">
            <img src={props.thumbnailUrl} alt={props.username}/>
            <h4>{props.username}</h4>
        </div>
    )
}

export default PostHeader;