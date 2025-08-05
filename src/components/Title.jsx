import styled from "styled-components";

const Container = styled.h2`
  padding-top: 100px;
  font-family: var(--nunito);
  font-size: 2.6rem;
  font-weight: 800;
  text-transform: uppercase;
  @media screen and (max-width: 1600px) {
    padding-top: 80px;
    font-size: 2.2rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 70px;
    font-size: 2rem;
  }
  @media screen and (max-width: 500px) {
    padding-top: 65px;
    font-size: 1.8rem;
  }
`;

const Title = ({ title }) => {
  return <Container className="innerlg">{title}</Container>;
};

export default Title;
