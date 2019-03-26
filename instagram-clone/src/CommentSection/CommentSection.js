import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    return(
        <div className="">
        {props.comments.map((comment, index) =>(
                <Comment
                key={index}
                comment={comment}
                />
            ))}
        </div>
    )
}

export default CommentSection;