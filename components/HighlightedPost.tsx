import styled from "styled-components";

const HighlightedPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)}px;


  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.contrast};
    
    > h2 {
      margin: 0;
      font-size: 32px;
    }
  }

  img {
    width: 100%;
    max-height: 300px;

    border-radius: 8px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .date {
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: 0.35s ease;
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export default HighlightedPost;
