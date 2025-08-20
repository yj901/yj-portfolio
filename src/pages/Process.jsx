import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../components/Title";
import StepsArr from "../components/Process/StepsArr";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  background: var(--processbg);
  width: 100%;
  height: 950px;
  /* min-height: 100vh; */
  position: relative;
  z-index: 6;
  @media screen and (max-width: 1600px) {
    min-height: 100vh;
    height: auto;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    min-height: auto;
    padding-bottom: 90px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const SubTitle = styled.h3`
  margin-top: 25px;
  font-size: 4.5rem;
  font-weight: 400;
  word-break: keep-all;
  line-height: 1.2;
  @media screen and (max-width: 1600px) {
    font-size: 3.8rem;
    margin-top: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    margin-top: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    margin-top: 10px;
  }
`;

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      return ScrollTrigger.create({
        id: "process",
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Container ref={sectionRef} id="process">
      <Title title={"PROCESS"} />
      <SubTitle className="innerlg">
        구상에서 구현까지, 저의 작업 흐름을 소개합니다.
      </SubTitle>
      <StepsArr />
    </Container>
  );
};

export default Process;
