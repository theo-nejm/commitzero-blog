import styled from "styled-components";

export default styled.div`
  height: max-content;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  &, * { transition: .3s ease; }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.contrast};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.postCardTitle};
    margin: .75rem 0;
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

  .author {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.author};
    margin-top: .25rem;
    transition: 0.35s ease;
    position: absolute;
    right: 0;
  }

  &:hover {
    .date, .description {
      opacity: .3;
    }
    
    img, .author, h3 {
      opacity: 1 !important;
    }
    
    img {
      transform: translateX(-5px) translateY(-5px);
      box-shadow: 5px 5px 0 ${({ theme }) => theme.colors.text.secondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: auto;
  }
`;
