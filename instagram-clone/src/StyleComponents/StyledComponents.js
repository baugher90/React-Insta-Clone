import styled from 'styled-components';

export const LoadAnimation = styled.div`
  margin: 0 auto;
  margin-top:50%;
`;

//---------------------SearchBar
export const Icon = styled.div`
  max-width:50px;
  max-hieght:50px;
  padding-right: 10px
  border-right: 2px solid #000000;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
}
`;

export const Bar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-height: 200px;
  border-radius: 3px;
  border-bottom: 2px solid #f0f0f0;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 5px 10px #888888;

  form{
    input{
      text-align:center;
      border-radious:4px;
      border:1px solid #aaaaaa;
      background:#f9f9f9;
      width:200px;
      height:30px;
    }
    
  }
`;

// export const SearchIcon = styled.div`
//   max-width:20px;
//   max-height:20px;
//   margin: 10px;
//   position: relative;
  

//   img {
//     max-width: 100%;
//     max-height: 100%;
//     border-radius: 50px;
// }
// `;

export const NavIcons = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 10px;
  

  img {
    max-width: 20px;
    max-height: 20px;
    padding:10px;
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
background: #ffffff;
border-radius: 3px;
border: 2px solid #f0f0f0;
color: grey;
margin: 10px auto;
&:hover {
  background:#f9f9f9;
}
`;

//---------------------------Comment Section

export const CommentContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 width: 98%;
 padding:5px;
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
 margin:5px 0;
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
