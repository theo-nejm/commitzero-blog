import type { NextPage } from "next";
import Container from "../components/Container";
import HighlightedPost from "../components/HighlightedPost";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  return (
    <Container>
      <h1
        style={{
          fontSize: 40,
        }}
      >
        The Blog
      </h1>

      <HighlightedPost>
        <img
          src="https://uxmisfit.com/wp-content/uploads/2021/01/tutorial_glass_featured.jpg"
          alt="image"
          width="100%"
          style={{ borderRadius: 8, maxHeight: 300 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>9 de Setembro de 2021</p>
          <h2
            style={{
              fontSize: 32,
            }}
          >
            Autenticando usuários usando NodeJS, maizena e JWT
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tempus venenatis massa, sit amet facilisis nibh
            consectetur a. Ut quis nisi eget urna porta luctus. Nunc egestas
            tempor risus et euismod. Duis pellentesque ante vitae porta dictum.
            Morbi quam urna, efficitur nec placerat commodo, finibus eu lectus.
          </p>
        </div>
      </HighlightedPost>

      <Posts>
        {/* <Post
          img="https://uxmisfit.com/wp-content/uploads/2021/01/tutorial_glass_featured.jpg"
          date={new Date()}
          title="Theo é avistado fazendo bola gato"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus venenatis massa, sit amet facilisis nibh consectetur a. Ut quis nisi eget urna porta luctus. Nunc egestas"
        /> */}
      </Posts>
    </Container>
  );
};

export default Home;
