import Container from './style';

interface Props {
  date: string;
  title: string;
  description: string;
  image: {
    url: string;
    altText: string;
  }
}

export default function Post({ date, title, description, image }: Props) {
  const parsedDate = new Date(date).toLocaleDateString();

  return <Container>
    <img src={image.url} alt={image.altText} />
    <div className="date">{parsedDate}</div>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="description">
      {description}
    </div>
  </Container>;
}
