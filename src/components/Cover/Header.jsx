import styled from "styled-components";
import SwapBtn from "../SwapBtn";
import { scrollToSection } from "../../utils/scrollToSection";
import MobileMenu from "./MobileMenu";

const Container = styled.header`
  position: relative;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    padding-top: 30px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 15px;
  }
`;

const Logo = styled.h1`
  font-family: var(--orbitron);
  font-size: 4rem;
  font-weight: 400;
  @media screen and (max-width: 1600px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
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

  @media screen and (max-width: 1600px) {
    gap: 30px;

    li {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 16px;

    li {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const BtnWrap = styled.div`
  position: relative;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Container className="innerlg">
      <Logo>YJ.dev</Logo>
      <Gnb>
        <li onClick={() => scrollToSection("about")}>ABOUT</li>
        <li onClick={() => scrollToSection("project")}>PROJECT</li>
        <li onClick={() => scrollToSection("team")}>TEAM</li>
        <li onClick={() => scrollToSection("work")}>WORK</li>
        <li onClick={() => scrollToSection("skills")}>SKILLS</li>
        <li onClick={() => scrollToSection("process")}>PROCESS</li>
      </Gnb>
      <BtnWrap>
        <SwapBtn label={"CONTACT"} onClick={() => scrollToSection("contact")} />
      </BtnWrap>
      <MobileMenu />
    </Container>
  );
};

export default Header;
