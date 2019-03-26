import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './PostContainer/PostContainer';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      post:'',
    }
  }

  componentDidMount() {
    setTimeout(()=>{
       this.setState({posts: dummyData});
    }, 1000);
    window.addEventListener('resize', () => {});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {});
  }


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
