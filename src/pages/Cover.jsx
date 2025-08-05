import styled from "styled-components";
import coverbg from "../assets/imgs/coverbg.jpg";
import Header from "../components/Cover/Header";
import Typography from "../components/Cover/Typography";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 920px;
  background: url(${coverbg}) center / cover no-repeat;
  color: var(--light);

  @media screen and (max-width: 1600px) {
    min-height: auto;
  }
  @media screen and (max-width: 1024px) {
    height: 600px;
  }
  @media screen and (max-width: 768px) {
    height: 550px;
    background-position: right center;
  }
  @media screen and (max-width: 450px) {
    height: 450px;
  }
`;

const Cover = () => {
  return (
    <Container id="cover">
      <Header />
      <Typography />
    </Container>
  );
};

export default Cover;
