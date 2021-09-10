import styled from "styled-components";

const HighlightedPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)}px;

  h2 {
    margin: 0;
  }
  
  .date {
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: .35s ease;
  }
`;

export default HighlightedPost;
