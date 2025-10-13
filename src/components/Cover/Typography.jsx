import styled from "styled-components";
import CircleTwo from "./CircleTwo";
import { useEffect, useRef } from "react";

const Container = styled.div`
  /* width: 1400px; */
  width: 76%;
  /* border: 1px solid #f00; */
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);

  .text1 {
    position: relative;
    display: inline-block;
    transform: translateX(150%);
    transition: transform 0.8s ease-in-out;
    &.ani {
      transform: translateX(0);
    }
  }
  .text2 {
    position: relative;
    display: inline-block;
    transform: translateX(-150%);
    transition: transform 0.8s ease-in-out;
    transition-delay: 0.2s;
    &.ani {
      transform: translateX(0);
    }
  }
  .text3 {
    position: relative;
    display: inline-block;
    transform: translateX(150%);
    transition: transform 0.8s ease-in-out;
    transition-delay: 0.4s;
    &.ani {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1600px) {
    width: 100%;
    padding: 0 7%;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 5%;
  }
  @media screen and (max-width: 768px) {
    padding: 0 3%;
    top: 50%;

    .text1 {
      transform: translateX(-150%);
    }
    .text2 {
      transform: translateX(150%);
    }
    .text3 {
      transform: translateX(-150%);
    }
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h2`
  font-family: var(--nunito);
  /* font-size: 23.5rem; */
  font-size: 13vw;
  font-weight: 500;
  line-height: 0.91;
  position: relative;
  &:nth-child(1) {
    width: 100%;
    text-align: right;
    padding-right: 20px;
    /* border: 1px solid #f00; */
  }
  &:nth-child(3) {
    width: 100%;
    text-align: right;
    /* border: 1px solid #f00; */
  }

  @media screen and (max-width: 1600px) {
    font-size: 14vw;
  }
  @media screen and (max-width: 768px) {
    position: static;
    &:nth-child(1) {
      width: 100%;
      text-align: left;
      padding-right: 0px;
    }
    &:nth-child(2) {
      width: 100%;
      text-align: center;
    }
    &:nth-child(3) {
      width: auto;
      text-align: left;
      display: block;
    }
  }
`;

const Txt2 = styled.p`
  position: absolute;
  top: 20%;
  left: 7%;
  /* font-size: 2rem; */
  font-size: 1.05vw;
  font-family: "Pretendard", sans-serif;
  font-weight: 200;
  line-height: 1.1;
  letter-spacing: 0.01em;
  position: absolute;
  text-align: left;

  span {
    display: none;
  }

  @media screen and (max-width: 1600px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    position: static;
    line-height: 1.2;
    br {
      display: none;
    }
    span {
      display: inline;
    }
  }
  @media screen and (max-width: 450px) {
    margin-top: 10px;
    .br450 {
      display: block;
    }
  }
`;

const Typography = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    if (text1.current) {
      text1.current.classList.add("ani");
    }
    if (text2.current) {
      text2.current.classList.add("ani");
    }
    if (text3.current) {
      text3.current.classList.add("ani");
    }
  }, []);

  return (
    <Container>
      <TextWrap>
        <Text>
          <CircleTwo />
          <span className="text1" ref={text1}>
            SHAPED
          </span>
        </Text>
        <Text>
          <span className="text2" ref={text2}>
            DYNAMIC
          </span>
        </Text>
        <Text>
          <span className="text3" ref={text3}>
            SYSTEMS
          </span>
          <Txt2>
            Ideas into UI<span>,</span>
            <br /> UI into experience<span>,</span>
            <br className="br450" /> Frontend developer,
            <br /> Gu Yeojin
          </Txt2>
        </Text>
      </TextWrap>
    </Container>
  );
};

export default Typography;
