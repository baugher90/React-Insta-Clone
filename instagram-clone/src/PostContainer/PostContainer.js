import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return(
        <div className="">
            {props.posts.map((post, index) =>(
                <Post
                key={index}
                post={post}
                />
            ))}
        </div>
    )
}

export default PostContainer;