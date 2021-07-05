import React from 'react';
import Post from './Post';
import Loader from 'react-loader-spinner';
import {LoadAnimation} from '../StyleComponents/StyledComponents';

const PostContainer = props => {

    if (props.posts.length === 0) {
        return <LoadAnimation><Loader type="Audio" color="#000000" height="100" width="100" /></LoadAnimation>;
      }

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