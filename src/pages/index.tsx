import type { NextPage } from "next";
import Link from "next/link";

import Container from "../components/Container";
import HighlightedPost from "../components/HighlightedPost";
import PostCard from "../components/PostCard";
import Posts from "../components/Posts";

import { posts as postsMock } from "../mocks/posts";

const Home: NextPage = () => {
  const highlighted = postsMock[0];

  return (
    <Container>
      <h1>CommitZero</h1>
      <HighlightedPost>
        <Link href={`post/${highlighted.id}`}>
          <a>
            <img src={highlighted.image.url} alt={highlighted.image.altText} />
          </a>
        </Link>
        <div>
          <p className="date">
            {new Date(highlighted.date).toLocaleDateString()}
          </p>
          <Link href={`post/${highlighted.id}`}>
            <a>
              <h2>{highlighted.title}</h2>
            </a>
          </Link>
          <p className="description">{highlighted.description}</p>
        </div>
      </HighlightedPost>

      <Posts>
        {postsMock
          .slice(1, postsMock.length)
          .map(({ title, description, id, date, image, content }) => (
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
