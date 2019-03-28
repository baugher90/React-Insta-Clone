import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';
import {CommentContainer} from '../StyleComponents/StyledComponents';
import LikeSection from './LikeSection';
import moment from 'moment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: props.comments,
          comment: '',
          likes: props.likes
        };
      }

      componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
          this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId))
          });
        } else {
          this.setComments();
        }
      }
    
      componenetWillUnmount() {
        this.setComments();
      }
    
      setComments = () => {
        localStorage.setItem(
          this.props.postId,
          JSON.stringify(this.state.comments)
        );
      };
    
      commentHandler = e => {
        this.setState({ comment: e.target.value });
      };
    
      handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: window.localStorage.getItem('user') };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        setTimeout(() => {
          this.setComments();
        }, 500);
      };

      incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };
    

    render() {
        return(
            <CommentContainer>
              <LikeSection
                incrementLike={this.incrementLike}
                likes={this.state.likes}
              />
                {this.state.comments.map((comment, index) =>(
                    <Comment
                    key={index}
                    comment={comment}
                    />
                ))}
                {moment().startOf('day').fromNow()}
                <AddComment 
                props={this.state.comment}
                submitComment={this.handleCommentSubmit}
                changeComment={this.commentHandler}
                />
            </CommentContainer>
        )
    }
}

export default CommentSection;