import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import {PostDiv,Img} from '../StyleComponents/StyledComponents'


const Post = props => {
    return(
        <PostDiv>
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <Img>
                <img 
                src={props.post.imageUrl} 
                alt={props.post.username}
                />
            </Img>
            <CommentSection 
                postId={props.post.imageUrl}
                comments={props.post.comments} 
                likes={props.post.likes}
            />
        </PostDiv>
    )
}

export default Post;