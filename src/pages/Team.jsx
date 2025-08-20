import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TitleBig from "../components/TitleBig";
import TeamSlider from "../components/Team/TeamSlider";

const Container = styled.section`
  background: var(--teambg);
  width: 100%;
  height: 100vh;
  min-height: 900px;
  color: var(--light);
  position: relative;
  z-index: 3;
  overflow: hidden;
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
  -webkit-text-stroke: 2px #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  right: 5%;
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
    bottom: auto;
    top: 422px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8rem;
    top: 340px;
  }
`;

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      return ScrollTrigger.create({
        id: "team",
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
    <Container ref={sectionRef} id="team">
      <BgTitle>TEAM</BgTitle>
      <div className="inner">
        <TitleBig title={"TEAM PROJECT"} />
        <TeamSlider />
      </div>
    </Container>
  );
};

export default Team;
