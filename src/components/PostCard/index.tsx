import Container from './style';
import Link from 'next/link';
import checkTitle from '../../utils/checkTitle';

interface Props {
  id: number;
  date: string;
  title: string;
  description: string;
  image: {
    url: string;
    altText: string;
  };
  content: string;
  author: string;
}

export default function Post({ id, date, title, description, image, author }: Props) {
  const parsedDate = new Date(date).toLocaleDateString();

  return <Container>
    <Link href={`/post/${id}`}>
    <a>
      <img src={image.url} alt={image.altText} />
    <div className="date">{parsedDate}</div>
    <div className="title">
      <h3>{checkTitle(title, 52)}</h3>
    </div>
    <div className="description">
      {description}
    </div>
    <div className="author">by {author}</div>
    </a>
    </Link>
  </Container>;
}
