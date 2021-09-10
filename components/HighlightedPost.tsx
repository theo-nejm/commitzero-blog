import styled from "styled-components";

const HighlightedPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)}px;

  h2 {
    margin: 0;

    font-size: 32px;
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
    transition: .35s ease;
  }

  @media(max-width: 720px) {
    grid-template-columns: 100%;
  }
`;

export default HighlightedPost;
