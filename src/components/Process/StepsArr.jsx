import styled, { keyframes } from "styled-components";
import ArrBg from "./ArrBg";
import {
  Lightbulb,
  CalendarCheck2,
  PanelsTopLeft,
  CodeXml,
  Rocket,
} from "lucide-react";
import { useRef, useEffect } from "react";

const lineAni = keyframes`
   0% {
    stroke-dashoffset: -2075;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Container = styled.div`
  position: relative;
  /* border: 1px solid #f00; */
  .arrbgWrap {
    margin-top: 50px;
    width: 100%;
    margin-top: 50px;
    font-size: 0;
    .arrbg {
      max-width: 100%;
      width: 88%;
      height: auto;
      display: block;
      aspect-ratio: 1684 / 456;
      .path {
        /* stroke-dasharray: 2075; */
        stroke-dasharray: 12 8;
        stroke-dashoffset: 2075;
        stroke: #c0c9c6;
        stroke-width: 3;
        &.ani {
          animation: ${lineAni} 2s ease-out forwards;
        }
        /* stroke-dasharray: 3000; */
      }
    }
  }
  &.ani {
    .path {
      /* animation: ${lineAni} 2s ease-out forwards; */
    }
  }

  @media screen and (max-width: 1600px) {
    .arrbgWrap {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 0 3%;
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 20px;
    .arrbgWrap {
      margin-top: 0px;
      position: absolute;
      bottom: -10%;
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
    .arrbgWrap {
      bottom: -5%;
      .arrbg {
        width: 95%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 40px;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    .arrbgWrap {
      display: none;
    }
  }
`;

const Step = styled.div`
  /* border: 1px solid #ff0; */
  position: absolute;
  width: 100%;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 14px;
  word-break: keep-all;
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--gray5);
  }

  @media screen and (max-width: 1600px) {
    gap: 12px;
    h4 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1400px) {
    gap: 10px;
    h4 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 1200px) {
    position: static;
    white-space: pre-wrap;
    gap: 14px;
    h4 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: auto;
    gap: 10px;
    h4 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 76px);
    gap: 6px;
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.3rem;
      line-height: 1.4;
      br {
        display: none;
      }
    }
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gray2b);
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  span {
    position: absolute;
    top: 0;
    left: -3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--processbg);
    background: var(--gray2b);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1600px) {
    width: 56px;
    height: 56px;
    svg {
      width: 26px;
    }
    span {
      width: 18px;
      height: 18px;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 60px;
    height: 60px;
    svg {
      width: 28px;
    }
    span {
      width: 20px;
      height: 20px;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 56px;
    height: 56px;
    svg {
      width: 26px;
    }
    span {
      width: 18px;
      height: 18px;
      font-size: 1rem;
    }
  }
`;

const StepNum = styled.div`
  position: absolute;
  min-width: 0;
  @media screen and (max-width: 1200px) {
    position: static;
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    gap: 20px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: row-reverse;
    width: 100%;
    gap: 15px;
  }
`;

const Step1 = styled(StepNum)`
  /* border: 1px solid #00f; */
  top: 58%;
  left: 12%;
  .stepWrap {
    bottom: calc(100% + 18px);
    left: -80%;
  }
`;

const Step2 = styled(StepNum)`
  top: 92%;
  left: 30%;
  .stepWrap {
    top: calc(100% + 18px);
    left: -100%;
  }
`;

const Step3 = styled(StepNum)`
  top: 55%;
  left: 45%;
  .stepWrap {
    left: calc(-300% - 20px);
    bottom: 60%;
  }
`;

const Step4 = styled(StepNum)`
  top: 21%;
  left: 58%;
  .stepWrap {
    top: calc(100% + 18px);
    left: -85%;
  }
`;

const Step5 = styled(StepNum)`
  top: 48%;
  left: 74%;
  .stepWrap {
    top: calc(100% + 18px);
    left: -80%;
  }
`;

const StepsArr = () => {
  const line = useRef(null);
  useEffect(() => {
    if (line.current) {
      line.current.classList.add("ani");
    }
  }, []);
  return (
    <Container ref={line}>
      <div className="arrbgWrap">
        <ArrBg />
      </div>
      <Step1>
        <Step className="stepWrap">
          <h4>아이디어 및 요구사항 정리</h4>
          <p>
            어떤 서비스를 만들지 구상하고&nbsp;
            <br />
            사용자 입장에서 필요한&nbsp;
            <br />
            기능과 목적을 정의합니다.
          </p>
        </Step>
        <Icon className="stepIcon">
          <span>1</span>
          <Lightbulb size={30} strokeWidth={2} />
        </Icon>
      </Step1>
      <Step2>
        <Step className="stepWrap">
          <h4>자료조사 및 구현 방향 설계</h4>
          <p>
            유사 사례와 기술을 조사해&nbsp;
            <br />
            구현 방향과 화면 아키텍처를 정리하고&nbsp;
            <br />
            전체 일정을 계획합니다.
          </p>
        </Step>
        <Icon className="stepIcon">
          <span>2</span>
          <CalendarCheck2 size={28} strokeWidth={2} />
        </Icon>
      </Step2>
      <Step3>
        <Step className="stepWrap">
          <h4>UI 디자인</h4>
          <p>
            컬러 · 타이포 콘셉트와 함께&nbsp;
            <br />
            레이아웃을 설계하고&nbsp;
            <br />
            실제 화면 시안을 완성합니다.
          </p>
        </Step>
        <Icon className="stepIcon">
          <span>3</span>
          <PanelsTopLeft size={28} strokeWidth={2} />
        </Icon>
      </Step3>
      <Step4>
        <Step className="stepWrap">
          <h4>퍼블리싱 및 기능 개발</h4>
          <p>
            디자인을 바탕으로&nbsp;
            <br />
            구조화된 UI를 구현하고&nbsp;
            <br />
            반응형 대응 및 상태관리와&nbsp;
            <br />
            사용자 인터랙션을 개발합니다.
          </p>
        </Step>
        <Icon className="stepIcon">
          <span>4</span>
          <CodeXml size={28} strokeWidth={2} />
        </Icon>
      </Step4>
      <Step5>
        <Step className="stepWrap">
          <h4>테스트 · 배포 · 유지보수</h4>
          <p>
            기능 검증과 디버깅을 통해
            <br />
            안정성을 확보하고, 배포 후에도
            <br />
            지속적인 점검과 개선을 이어갑니다.
          </p>
        </Step>
        <Icon className="stepIcon">
          <span>5</span>
          <Rocket size={28} strokeWidth={2} />
        </Icon>
      </Step5>
    </Container>
  );
};

export default StepsArr;
