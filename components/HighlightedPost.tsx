import styled from "styled-components";

const HighlightedPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export default HighlightedPost;
