import type { NextPage } from "next";
import Link from 'next/link';

import Container from "../components/Container";
import HighlightedPost from "../components/HighlightedPost";
import PostCard from "../components/PostCard";
import Posts from "../components/Posts";
import checkTitle from '../utils/checkTitle';

import { posts as postsMock } from "../mocks/posts";

const Home: NextPage = () => {
  const highlighted = postsMock[0];
  
  return (
    <Container>
      <h1>CommitZero</h1>
      <HighlightedPost>
        <Link href={`post/${highlighted.id}`}>
        <a>
          <img
            src={highlighted.image.url}
            alt={highlighted.image.altText}
          />
        </a>
        </Link>
        <div>
          <p className="date">{new Date(highlighted.date).toLocaleDateString()}</p>
          <Link href={`post/${highlighted.id}`}>
            <a>
              <h2>{checkTitle(highlighted.title, 48)}</h2>
            </a>
          </Link>
          <p className="description">
            {highlighted.description}
          </p>
          <div className="author">by {highlighted.author}</div>
        </div>
        
      </HighlightedPost>
      
      <Posts>
        {postsMock.slice(1, postsMock.length).map(({ title, description, id, date, image, content, author }) => (
          <PostCard
            title={title}
            description={description}
            key={id}
            id={id}
            date={date}
            image={image}
            content={content}
            author={author}
          />
        ))}
      </Posts>
    </Container>
  );
};

export default Home;
