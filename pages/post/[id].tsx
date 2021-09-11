import { useRouter } from 'next/router';
import Container from '../../components/Container';
import { posts as postsMock } from '../../mocks/posts';
import { Content, TopContainer } from './style';

export default function Post() {
  const router = useRouter();
  const id = router.query.id;
  const post = postsMock.find(post => post.id === Number(id));
  
  if(post) {
    console.log(post)
    return (
      <Container>
        <TopContainer imgUrl={post.image.url}>
          <div className="img" />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </TopContainer>
        <Content>
          <p>{post.content}</p>
        </Content>
      </Container>
    )
  }
  return (
    <h2>
      não tem post
    </h2>
  )
}