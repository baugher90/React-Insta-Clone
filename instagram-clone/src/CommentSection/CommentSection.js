import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';
import {CommentContainer} from '../StyleComponents/StyledComponents';
import heart from '../Images/heart.png';
import comment from '../Images/comment.png';
import moment from 'moment';

const CommentSection = props => {
    return(
        <CommentContainer>
            <img src={heart}alt="heart"/>
            <img src={comment}alt="comment"/>
            {props.comments.map((comment, index) =>(
                <Comment
                key={index}
                comment={comment}
                />
            ))}
            {moment().startOf('day').fromNow()}
            <AddComment props={props.comments}/>
        </CommentContainer>
    )
}

export default CommentSection;