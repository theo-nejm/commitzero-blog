import styled from "styled-components";

interface IProps {
  imgUrl: string;
}

export const TopContainer = styled.div<IProps>`
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
  text-align: center;
}

p {
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  width: 80%;
  margin-left: 10%;
  margin-top: -1rem;
}

.divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, ${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.text.contrast}, ${({ theme }) => theme.colors.background});
  margin-bottom: 1rem;
  border-radius: 200px;
  transition: .35s ease;
}
`

