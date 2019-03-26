import React from 'react';
import {UserComment} from '../StyleComponents/StyledComponents';

const Comment = props => {
    return(
        <UserComment>
        <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </UserComment>
    )
};

export default Comment;