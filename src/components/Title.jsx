import styled from "styled-components";

const Container = styled.h2`
  padding-top: 100px;
  font-family: var(--nunito);
  font-size: 2.6rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const Title = ({ title }) => {
  return <Container className="innerlg">{title}</Container>;
};

export default Title;
