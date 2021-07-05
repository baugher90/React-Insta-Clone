import React from 'react';
import threeDots from '../Images/threeDots.png';
import {NewComment} from '../StyleComponents/StyledComponents';

const AddComment = props => {
    return(
        <NewComment>
            <form onSubmit={props.submitComment}>
                <input
                type="text"
                value={props.comment}
                placeholder="Add a comment..."
                onChange={props.changeComment}
                />
            </form>
            <img src={threeDots} alt="add-comment" onClick={props.submitComment}/>
        </NewComment>
    )
}

export default AddComment;