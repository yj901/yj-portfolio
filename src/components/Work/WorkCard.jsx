import styled from "styled-components";

const Card = styled.div`
  /* border: 1px solid #f00; */
  background: var(--gray2b);
  cursor: pointer;
  a {
    display: inline-block;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: 1600px) {
    height: calc(120px + 11vw);
  }
`;

const TextWrap = styled.div`
  padding: 28px 32px 32px;
  height: 220px;
  @media screen and (max-width: 1600px) {
    padding: 26px 30px 30px;
    height: 190px;
  }
  @media screen and (max-width: 1400px) {
    padding: 24px 28px 28px;
    height: 180px;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px 24px 24px;
    height: 160px;
  }
  @media screen and (max-width: 768px) {
    padding: 16px 20px 20px;
    height: 140px;
  }
`;

const Title = styled.h3`
  color: var(--light);
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
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
  font-size: 1.6rem;
  color: var(--light);
  margin: 20px 0;
  font-weight: 300;
  line-height: 1.5;
  word-break: keep-all;
  @media screen and (max-width: 1600px) {
    height: 45px;
    margin: 16px 0;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1400px) {
    height: 42px;
    margin: 15px 0;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1024px) {
    height: 42px;
    margin: 14px 0;
    font-size: 1.35rem;
  }
  @media screen and (max-width: 768px) {
    height: 40px;
    margin: 10px 0;
    font-size: 1.3rem;
  }
`;

const WorkCard = ({ title, summary, thumbnail, link }) => {
  return (
    <Card>
      <a href={link} target="_blank">
        <Thumbnail src={thumbnail} alt={title} />
        <TextWrap>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </TextWrap>
      </a>
    </Card>
  );
};

export default WorkCard;
