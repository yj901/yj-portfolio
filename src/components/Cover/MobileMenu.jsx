import { useState } from "react";
import styled from "styled-components";
import { scrollToSection } from "../../utils/scrollToSection";
import useNavStore from "../../store/navStore";

const Container = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MenuBtn = styled.div`
  position: fixed;
  top: 23px;
  right: 3%;
  z-index: 9999;
  width: 25px;
  padding: 10px 0;
  cursor: pointer;
  /* border: 1px solid #f00; */
  span {
    position: absolute;
    backdrop-filter: invert(1);
    width: 25px;
    height: 2px;
    transition: all 0.4s;
    transform-origin: center;
    &:first-child {
      top: 0;
    }
    &:last-child {
      top: 14px;
    }
  }
  &.active {
    span {
      margin-top: 8px;
      background: var(--gray1);
      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        top: 0px;
        transform: rotate(-45deg);
      }
    }
  }
`;

const MenuModal = styled.div`
  display: block;
  padding: 40px;
  position: fixed;
  z-index: 8000;
  right: 0;
  top: 0;
  transform: translateX(100%);
  width: 100%;
  height: 100vh;
  background: var(--light);
  color: var(--gray1);
  transition: transform 0.4s ease;
  &.active {
    transform: translateX(0%);
  }
`;

const Gnb = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.4vw;
  font-size: 5vw;
  font-weight: 500;
  li {
    cursor: pointer;
  }
`;

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const current = useNavStore((state) => state.currentSection);
  // const darkSections = ["cover", "team", "contact"];
  // const isDark = darkSections.includes(current);

  //mobile 메뉴 토글
  const handleClickMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (sectionId) => {
    // scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <Container>
      <MenuBtn
        onClick={handleClickMobileMenu}
        className={mobileMenuOpen ? "active" : ""}
      >
        <span></span>
        <span></span>
      </MenuBtn>
      <MenuModal className={mobileMenuOpen ? "active" : ""}>
        <Gnb>
          <li onClick={() => handleMenuClick("cover")}>COVER</li>
          <li onClick={() => handleMenuClick("about")}>ABOUT</li>
          <li onClick={() => handleMenuClick("project")}>PROJECT</li>
          <li onClick={() => handleMenuClick("team")}>TEAM</li>
          <li onClick={() => handleMenuClick("work")}>WORK</li>
          <li onClick={() => handleMenuClick("skills")}>SKILLS</li>
          <li onClick={() => handleMenuClick("process")}>PROCESS</li>
          <li onClick={() => handleMenuClick("contact")}>CONTACT</li>
        </Gnb>
      </MenuModal>
    </Container>
  );
};

export default MobileMenu;
