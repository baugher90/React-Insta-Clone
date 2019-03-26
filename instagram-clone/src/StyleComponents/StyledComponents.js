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
//---------------------PostContainer
//----------------UserThumbnail
export const UserThumbnail = styled.div`
  max-width:50px;
  max-hieght:50px;
  padding: 10px;

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
    border-radius: 5px;
}
`;

export const PostDiv = styled.div`
max-width: 600px;
background: lightgrey;
border-radius: 3px;
border: 2px solid grey;
color: grey;
margin: 10px auto;
padding: 10px;
&:hover {
  background:white;
}
`;

export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
&:hover {
  padding: 0.5em 2em;
}

${props =>
  props.type === 'primary' &&
  css`
    background: palevioletred;
    color: white;
  `}
`;

//---------------------------Comment Section

export const UserComment = styled.div`
 display: flex;
 width: 300px;

`;