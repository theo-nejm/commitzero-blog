import styled from "styled-components";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 40px;
  }
`;

export default Container;
