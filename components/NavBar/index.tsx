import { NavContainer, ThemeButton } from "./style";

export default function NavBar({ toggleTheme }: any) {
  return (
    <NavContainer>
      <h1>Blog</h1>
      <ThemeButton onClick={toggleTheme}>T</ThemeButton>
    </NavContainer>
  );
}
