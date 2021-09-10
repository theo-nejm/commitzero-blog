import styled from "styled-components";
import PostCard from "./PostCard";

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(5)}px;
  margin-top: ${({ theme }) => theme.spacing(6)}px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export default PostsContainer;
