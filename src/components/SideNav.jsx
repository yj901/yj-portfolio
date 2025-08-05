import useNavStore from "../store/navStore";
import styled from "styled-components";
import { scrollToSection } from "../utils/scrollToSection";

const Container = styled.nav`
  position: fixed;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  will-change: transform;
  z-index: 5000;
  @media screen and (max-width: 1600px) {
    right: 90px;
  }
  @media screen and (max-width: 1400px) {
    right: 12px;
  }
  @media screen and (max-width: 768px) {
    right: 5px;
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Gnb = styled.ul`
  display: flex;
  flex-direction: column;
  &.bgblack {
    li {
      span {
        background: var(--light2);
      }
      &::before {
        border: 1px solid var(--graybb);
      }
      &::after {
        color: var(--light);
      }
    }
  }
  li {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    @media screen and (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
    /* background: #ff0; */
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid var(--graybb);
      border-radius: 50%;
      width: 0px;
      height: 0px;
      opacity: 0;
      transition: all 0.4s ease;
    }
    &::after {
      content: attr(data-name);
      display: block;
      position: absolute;
      font-size: 1.6rem;
      font-weight: 400;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      opacity: 0;
      /* visibility: hidden; */
      transition: all 0.4s ease;
      transition-delay: 0.1s;
      @media screen and (max-width: 1600px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 1400px) {
        font-size: 1.4rem;
        left: auto;
        right: 0;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &:hover {
      &::before {
        width: 23px;
        height: 23px;
        opacity: 1;
        @media screen and (max-width: 768px) {
          width: 17px;
          height: 17px;
        }
      }
      &::after {
        left: 32px;
        opacity: 1;
        @media screen and (max-width: 1400px) {
          left: auto;
          right: 32px;
        }
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
    &.active {
      &::before {
        width: 23px;
        height: 23px;
        opacity: 1;
        @media screen and (max-width: 768px) {
          width: 17px;
          height: 17px;
        }
      }
      &::after {
        left: 32px;
        opacity: 1;
        @media screen and (max-width: 1400px) {
          left: auto;
          right: 32px;
        }
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
    span {
      background: var(--gray41);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      @media screen and (max-width: 768px) {
        width: 2px;
        height: 2px;
      }
    }
  }
`;

const SideNav = () => {
  const current = useNavStore((state) => state.currentSection);
  if (current === "cover") return null;

  const darkSections = ["team", "contact"];
  const isDark = darkSections.includes(current);

  return (
    <Container>
      <Gnb className={isDark ? "bgblack" : ""}>
        <li
          data-name="COVER"
          onClick={() => scrollToSection("cover")}
          className={current === "cover" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="ABOUT"
          onClick={() => scrollToSection("about")}
          className={current === "about" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="PROJECT"
          onClick={() => scrollToSection("project")}
          className={current === "project" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="TEAM"
          onClick={() => scrollToSection("team")}
          className={current === "team" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="WORK"
          onClick={() => scrollToSection("work")}
          className={current === "work" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="SKILLS"
          onClick={() => scrollToSection("skills")}
          className={current === "skills" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="PROCESS"
          onClick={() => scrollToSection("process")}
          className={current === "process" ? "active" : ""}
        >
          <span></span>
        </li>
        <li
          data-name="CONTACT"
          onClick={() => scrollToSection("contact")}
          className={current === "contact" ? "active" : ""}
        >
          <span></span>
        </li>
      </Gnb>
    </Container>
  );
};

export default SideNav;
