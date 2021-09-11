import styled from "styled-components";

export default styled.div`
  height: 30rem;
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.contrast}
  }

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.spacing(1)}px;
    margin-bottom: 1.5rem;
  }

  .date {
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: 0.35s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: auto;
  }
`;
