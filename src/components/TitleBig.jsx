import styled from "styled-components";

const Container = styled.h2`
  padding-top: 90px;
  font-size: 6.5rem;
  font-family: var(--nunito);
  font-weight: 600;
  @media screen and (max-width: 1600px) {
    padding-top: 80px;
    font-size: 5.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 70px;
    font-size: 4rem;
  }
  @media screen and (max-width: 500px) {
    padding-top: 65px;
    font-size: 3rem;
  }
`;

const TitleBig = ({ title }) => {
  return <Container>{title}</Container>;
};

export default TitleBig;
