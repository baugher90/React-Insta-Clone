import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return(
        <div className="">
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            /><img src={props.post.imageUrl} alt={props.post.username}/>
            <CommentSection />
        </div>
    )
}

export default Post;