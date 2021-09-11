import type { NextPage } from "next";

import Container from "../components/Container";
import HighlightedPost from "../components/HighlightedPost";
import PostCard from "../components/PostCard";
import Posts from "../components/Posts";

import { posts as postsMock } from "../mocks/posts";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>CommitZero</h1>

      <HighlightedPost>
        <img
          src="https://uxmisfit.com/wp-content/uploads/2021/01/tutorial_glass_featured.jpg"
          alt="image"
        />
        <div>
          <p className="date">9 de Setembro de 2021</p>
          <h2>Autenticando usuários usando NodeJS, maizena e JWT</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tempus venenatis massa, sit amet facilisis nibh
            consectetur a. Ut quis nisi eget urna porta luctus. Nunc egestas
            tempor risus et euismod. Duis pellentesque ante vitae porta dictum.
            Morbi quam urna, efficitur nec placerat commodo, finibus eu lectus.
          </p>
        </div>
      </HighlightedPost>

      <Posts>
        {postsMock.map(({ title, description, id, date, image, content }) => (
          <PostCard
            title={title}
            description={description}
            key={id}
            id={id}
            date={date}
            image={image}
            content={content}
          />
        ))}
      </Posts>
    </Container>
  );
};

export default Home;
