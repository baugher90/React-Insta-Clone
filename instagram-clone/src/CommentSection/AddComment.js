import React from 'react';
import threeDots from '../Images/threeDots.png';
import {NewComment} from '../StyleComponents/StyledComponents';

const AddComment = props => {
    return(
        <NewComment>
            <form>
                <input
                placeholder="Add a comment..."
                />
            </form>
            <img src={threeDots} alt="add-comment"/>
        </NewComment>
    )
}

export default AddComment;