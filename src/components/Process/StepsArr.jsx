import styled from "styled-components";
import ArrBg from "./ArrBg";
import {
  Lightbulb,
  CalendarCheck2,
  PanelsTopLeft,
  CodeXml,
  Rocket,
} from "lucide-react";

const Container = styled.div`
  position: relative;
  /* border: 1px solid #f00; */
  .arrbg {
    margin-top: 50px;
    left: 0;
    max-width: 100%;
  }
`;

const Step = styled.div`
  /* border: 1px solid #f00; */
  display: flex;
  flex-direction: column;
  gap: 14px;

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--gray5);
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
`;

const Step1 = styled.div`
  position: absolute;
  top: 38%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Step2 = styled.div`
  position: absolute;
  top: 92%;
  left: 26%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
  .stepWrap {
    margin-left: 40px;
  }
`;

const Step3 = styled.div`
  position: absolute;
  top: 45%;
  left: 34%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 20px;
  .stepWrap {
    margin-bottom: 35px;
  }
`;

const Step4 = styled.div`
  position: absolute;
  top: 29%;
  left: 54%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
  .stepWrap {
    margin-left: 40px;
  }
`;

const Step5 = styled.div`
  position: absolute;
  top: 52%;
  left: 71%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
  .stepWrap {
    margin-left: 50px;
  }
`;

const StepsArr = () => {
  return (
    <Container>
      <ArrBg />
      <Step1>
        <Step className="stepWrap">
          <h4>아이디어 및 요구사항 정리</h4>
          <p>
            어떤 서비스를 만들지 구상하고
            <br /> 사용자 입장에서 필요한
            <br /> 기능과 목적을 정의합니다.
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
            유사 사례와 기술을 조사해
            <br /> 구현 방향과 화면 아키텍처를 정리하고
            <br /> 전체 일정을 계획합니다.
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
            컬러 · 타이포 콘셉트와 함께
            <br /> 레이아웃을 설계하고
            <br /> 실제 화면 시안을 완성합니다.
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
            디자인을 바탕으로
            <br /> 구조화된 UI를 구현하고
            <br /> 반응형 대응 및 상태관리와
            <br /> 사용자 인터랙션을 개발합니다.
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
            <br /> 안정성을 확보하고, 배포 후에도
            <br /> 지속적인 점검과 개선을 이어갑니다.
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
