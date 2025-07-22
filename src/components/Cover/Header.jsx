import styled from "styled-components";
import SwapBtn from "../SwapBtn";

const Container = styled.header`
  position: relative;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-family: var(--orbitron);
  font-size: 4rem;
  font-weight: 400;
`;

const Gnb = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;

  li {
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container className="innerlg">
      <Logo>YJ.dev</Logo>
      <Gnb>
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>TEAM</li>
        <li>WORK</li>
        <li>SKILLS</li>
        <li>PROCESS</li>
      </Gnb>
      <SwapBtn label={"CONTACT"} />
    </Container>
  );
};

export default Header;
