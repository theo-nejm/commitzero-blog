import styled from "styled-components";


export const TopContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: space-between;
overflow: hidden;
position: relative;

.img {
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
}

h2 {
  font-size: ${({ theme }) => theme.fontSize.title};
  line-height: 100px;
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
