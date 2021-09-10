import styled from "styled-components";

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(6)}px;
`;

export default Posts;
