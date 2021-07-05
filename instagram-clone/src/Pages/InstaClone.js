import React, { Component } from 'react';
import dummyData from '../dummy-data';
import PostsContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      search: ''
    };
  }
  componentDidMount() {
    setTimeout(()=>{
       this.setState({posts: dummyData});
    }, 2000);
    window.addEventListener('resize', () => {});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {});
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const filteredPosts = this.state.posts.filter(post => {
      if (post.username.includes(this.state.search)) {
        return post;
      }
      return null;
    });
    return (
      <div className="App">
        <SearchBar
          handleChanges={this.handleChanges}
          search={this.state.search}
        />
        <PostsContainer posts={filteredPosts} />
      </div>
    );
  }
}

export default InstaClone;