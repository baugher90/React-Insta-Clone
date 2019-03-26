import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './PostContainer/PostContainer';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      post:'',
    }
  }

  componentDidMount() {
    this.getPosts(dummyData);
  }

  getPosts = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ posts: data.results });
      })
      .catch(err => {
        new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <SearchBar posts={this.state.posts}/>
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
