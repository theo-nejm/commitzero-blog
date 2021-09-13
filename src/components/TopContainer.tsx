import styled from "styled-components";

export const TopContainer = styled.div`
display: grid;

grid-template-areas: 'top' 
                     'bottom';

gap: 2rem;

justify-content: space-between;
overflow: hidden;
position: relative;

.top {
  grid-area: top;

  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-template-areas: 'left right';

  .right, .left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    grid-area: right;
    .img {
      width: 100%;
      border-radius: ${({ theme }) => theme.spacing(1)}px;
    }
  }
  
  .left {
    grid-area: left;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.title};
      line-height: 140%;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }  
}

.bottom {
  grid-area: bottom;
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
    margin: 2rem 0;
    border-radius: 200px;
    transition: .35s ease;
  }
}
`
