import { NavContainer, ThemeButton } from "./style";
import Link from "next/link";

export default function NavBar({ toggleTheme }: any) {
  return (
    <NavContainer>
      <Link href="/">
        <a>
          <h1>Blog</h1>
        </a>
      </Link>
      <ThemeButton onClick={toggleTheme}>T</ThemeButton>
    </NavContainer>
  );
}
