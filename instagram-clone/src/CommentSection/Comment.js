import React from 'react';
import {UserComment} from '../StyleComponents/StyledComponents';

const Comment = props => {
    return(
        <UserComment>
        <p className="comment">{props.comment.text}</p>{' '}<h4 className="user">-{props.comment.username}</h4>
        </UserComment>
    )
};

export default Comment;