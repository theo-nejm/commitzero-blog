import styled from 'styled-components';

export default styled.div`
  height: 30rem;
  width: 100%;

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.spacing(1)}px;
    margin-bottom: 1.5rem;
  }

  .date {
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: .35s ease;
  }
`
