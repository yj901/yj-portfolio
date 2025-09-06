import styled from "styled-components";

const Card = styled.div`
  background: var(--gray2b);
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  /* height: 300px; */
  aspect-ratio: 1/0.58;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    height: calc(120px + 11vw);
  }
`;

const TextWrap = styled.div`
  padding: 28px 32px 32px;
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  @media screen and (max-width: 1600px) {
    padding: 26px 30px 30px;
  }
  @media screen and (max-width: 1400px) {
    padding: 24px 28px 28px;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px 24px 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 16px 20px 20px;
  }
`;

const Title = styled.h3`
  color: var(--light);
  font-size: 2.8rem;
  font-weight: 700;
  @media screen and (max-width: 1600px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const Summary = styled.p`
  margin: 20px 0;
  height: 48px;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
  color: var(--light);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 1600px) {
    height: 45px;
    margin: 16px 0;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1400px) {
    height: 42px;
    margin: 15px 0;
    font-size: 1.35rem;
  }
  @media screen and (max-width: 1024px) {
    height: 42px;
    margin: 14px 0;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    height: 40px;
    margin: 10px 0;
    font-size: 1.25rem;
  }
`;

const Tags = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 10px;
  overflow: hidden;
  @media screen and (max-width: 1600px) {
    gap: 9px;
  }
  @media screen and (max-width: 1400px) {
    gap: 8px;
  }
  @media screen and (max-width: 1024px) {
    gap: 6px;
  }
`;

const Tag = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  background: #f1f1f1;
  color: var(--gray19);
  padding: 6px 16px;
  border-radius: 100px;
  @media screen and (max-width: 1600px) {
    padding: 5px 15px;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 4px 14px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 4px 14px;
    font-size: 1.15rem;
  }
`;

const ProjectCard = ({ title, summary, thumbnail, tags, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Thumbnail src={thumbnail} alt={title} />
      <TextWrap>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Tags>
          {tags.map((tag, i) => (
            <Tag key={i}>#{tag}</Tag>
          ))}
        </Tags>
      </TextWrap>
    </Card>
  );
};

export default ProjectCard;
