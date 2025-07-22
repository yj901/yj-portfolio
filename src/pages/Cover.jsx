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
`;

const Cover = () => {
  return (
    <Container>
      <Header />
      <Typography />
    </Container>
  );
};

export default Cover;
