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
`;

const SubTitle = styled.h3`
  font-size: 4.5rem;
  font-weight: 400;
  margin-top: 20px;
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
