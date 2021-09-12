import { useRouter } from 'next/router';
import Container from '../../components/Container';
import { posts as postsMock } from '../../mocks/posts';
import { Content } from '../../components/Content';
import { TopContainer  } from '../../components/TopContainer';
import SEO from '../../components/SEO';

export default function Post() {
  const router = useRouter();
  const id = router.query.id;
  const post = postsMock.find(post => post.id === Number(id));
  
  if(post) {
    return (
      <Container id='post-container'>
        <SEO title={post.title} description={post.description} image={post.image.url} />

        <TopContainer>
          <img src={post.image.url} alt={post.image.altText} className='img' />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className="divider" />
        </TopContainer>
        <Content dangerouslySetInnerHTML={{ __html: post.content}} />
      </Container>
    )
  } else {
    return null;
  }
}
