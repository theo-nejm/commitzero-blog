import styled from "styled-components";
import PostCard from './PostCard';

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(5)}px;
  margin-top: ${({ theme }) => theme.spacing(6)}px;
  width: 100%;

  
  @media(max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 720px) {
    grid-template-columns: 100%;
  }
`;

export default PostsContainer;