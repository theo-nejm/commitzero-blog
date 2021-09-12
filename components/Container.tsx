import styled from "styled-components";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
  max-width: ${(props) => props.id === "post-container" 
  ? props.theme.breakpoints.post
  : props.theme.breakpoints.lg}px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 40px;
  }
`;

export default Container;
