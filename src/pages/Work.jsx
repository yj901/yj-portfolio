import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkSlider from "../components/Work/WorkSlider";
import TitleBig from "../components/TitleBig";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  background: var(--workbg);
  width: 100%;
  height: 100vh;
  min-height: 800px;
  position: relative;
  z-index: 4;
  @media screen and (max-width: 1600px) {
    min-height: 100vh;
    height: auto;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    min-height: auto;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 85px;
  }
`;

const BgTitle = styled.span`
  display: inline-block;
  font-size: 25rem;
  opacity: 0.05;
  color: transparent;
  -webkit-text-stroke: 2px #000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  left: 10px;
  @media screen and (max-width: 1600px) {
    font-size: 20rem;
    bottom: 10px;
  }
  @media screen and (max-width: 1400px) {
    font-size: 17rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 13rem;
    bottom: 8px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 8rem;
    bottom: 28px;
  }
`;

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      return ScrollTrigger.create({
        id: "work",
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        // scrub: true,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Container ref={sectionRef} id="work">
      <BgTitle>WORK</BgTitle>
      <div className="inner">
        <TitleBig title={"WORK"} />
      </div>
      <WorkSlider />
    </Container>
  );
};

export default Work;
