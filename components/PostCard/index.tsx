import Container from './style';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  id: number;
  date: string;
  title: string;
  description: string;
  image: {
    url: string;
    altText: string;
  },
  content: string;
}

export default function Post({ id, date, title, description, image, content }: Props) {
  const parsedDate = new Date(date).toLocaleDateString();

  return <Container>
    <Link href={`/post/${id}`}>
    <a>
      <img src={image.url} alt={image.altText} />
    
    <div className="date">{parsedDate}</div>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="description">
      {description}
    </div>
    </a>
    </Link>
  </Container>;
}
