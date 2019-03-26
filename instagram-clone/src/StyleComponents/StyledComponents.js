import styled, {css} from 'styled-components';

export const LoadAnimation = styled.div`
  margin: 0 auto;
  margin-top:50%;
`;

//---------------------SearchBar
export const Icon = styled.div`
  max-width:70px;
  max-hieght:70px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
}
`;

export const Bar = styled.div`
  max-height: 200px;
  border-radius: 3px;
  border-bottom: 2px solid grey;
  margin: 10px auto;
  padding: 10px;

`;

export const SearchIcon = styled.div`
  max-width:20px;
  max-height:20px;
  margin: 10px;
  position: relative;
  

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50px;
}
`;
//---------------------PostContainer

export const UserThumbnail = styled.div`
  max-width:50px;
  max-height:50px;
  margin: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50px;
}
`;

export const HeaderStyle = styled.div`
 display: flex;
 width: 100%;
 
 h4{
   padding-left: 10px;
 }

 
`;

//----------------Post Image
export const Img = styled.div`
  max-width:100%;
  max-hieght:100%;

  img {
    max-width: 100%;
    max-height: 100%;
}
`;

export const PostDiv = styled.div`
max-width: 600px;
background: lightgrey;
border-radius: 3px;
border: 2px solid grey;
color: grey;
margin: 10px auto;
&:hover {
  background:white;
}
`;

//---------------------------Comment Section

export const CommentContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 width: 100%;
  img{
    margin:5px;
    width:20px;
    height:20px;
  }
`;

export const UserComment = styled.div`
 display: flex;
 width: 100%;
 text-align: left;
 p{
   margin: 3px;
 }
`;

export const NewComment = styled.div`
 display: flex;
 justify-content:space-between;
 flex-wrap: wrap;
 width: 100%;
 border-top:1px solid grey;
  form{
    input{
      margin:10px 0;
      width:300px;
      height:20px;
      background:none;
      border:none;

    }
  }
`;
