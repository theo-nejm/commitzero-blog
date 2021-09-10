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

  .description {
    white-space: nowrap;                  
    overflow: hidden;
    text-overflow:    ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default HighlightedPost;
