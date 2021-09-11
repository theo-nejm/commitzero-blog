import styled from "styled-components";

export const TopContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: space-between;
overflow: hidden;
position: relative;

.img {
  height: 200px;
  background: url(${props => props.imgUrl});
  border-radius: ${({ theme }) => theme.spacing(2)}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

h2 {
  font-size: ${({ theme }) => theme.fontSize.title};
  z-index: 1;
  text-align: center;
}


p {
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  width: 80%;
  margin-left: 10%;
  margin-top: -1rem;
}
`

export const Content = styled.div`
font-size: ${({ theme }) => theme.fontSize.text}
`