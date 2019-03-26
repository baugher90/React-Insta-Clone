import React from 'react';
import { UserThumbnail, HeaderStyle } from '../StyleComponents/StyledComponents';

const PostHeader = props => {
    return(
        <HeaderStyle>
            <UserThumbnail>
                <img 
                src={props.thumbnailUrl} 
                alt={props.username}
                />
            </UserThumbnail>
            <h4>{props.username}</h4>
        </HeaderStyle>
    )
}

export default PostHeader;