import styled from 'styled-components';

export const Content = styled.div`
font-size: ${({ theme }) => theme.fontSize.small};

h3 {
  font-size: ${({ theme }) => theme.fontSize.subtitle}
  margin-bottom: .5rem;
}

p {
  font-size: ${({ theme }) => theme.fontSize.small}
}
`