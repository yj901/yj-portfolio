import { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import SkillsTabs from "../components/Skills/SkillsTabs";
import skillsData from "../data/skillsData";

const Container = styled.section`
  background: var(--skillsbg);
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: relative;
  z-index: 5;
  overflow-x: hidden;
  @media screen and (max-width: 1024px) {
    height: auto;
    min-height: auto;
  }
`;

const SubTitle = styled.h3`
  font-size: 4.5rem;
  font-weight: 400;
  margin: 65px 0 30px;
  word-break: keep-all;
  @media screen and (max-width: 1600px) {
    font-size: 3.8rem;
    margin: 55px 0 25px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    margin: 45px 0 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin: 36px 0 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 2rem;
    margin: 28px 0 14px;
  }
`;

const SkillsList = styled.ul`
  border-top: 1px solid var(--gray8b);
  padding-bottom: 120px;

  & > li {
    padding: 45px 0;
    border-bottom: 1px solid var(--gray8b);
    position: relative;
    display: flex;
    align-items: start;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      transform: scale(1);
      transition: background 0.4s ease, transform 0.5s ease;
    }
    &:hover {
      z-index: 1;
      &::before {
        background: var(--skillsbg2);
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 1600px) {
    & > li {
      padding: 42px 0;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-bottom: 100px;

    & > li {
      padding: 38px 0;
    }
  }
  @media screen and (max-width: 768px) {
    & > li {
      padding: 36px 0;
    }
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 80px;
    & > li {
      padding: 34px 0;
    }
  }
`;

const Number = styled.span`
  width: 20%;
  font-size: 2.2rem;
  @media screen and (max-width: 1600px) {
    width: 15%;
    font-size: 2rem;
  }
  @media screen and (max-width: 1024px) {
    width: 10%;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    width: 8%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    width: 8%;
    font-size: 1.4rem;
  }
`;

const SkillDesc = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-right: 30px;
  @media screen and (max-width: 1600px) {
    width: 65%;
    gap: 12px;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 72%;
    gap: 8px;
    padding-right: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 67%;
    padding-right: 15px;
  }
`;

const Tit = styled.h4`
  font-size: 2.6rem;
  font-weight: 600;
  @media screen and (max-width: 1600px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`;

const Desc = styled.p`
  font-size: 1.6rem;
  word-break: keep-all;
  color: var(--gray41);
  line-height: 1.6;
  @media screen and (max-width: 1600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.35rem;
    line-height: 1.5;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const Tags = styled.ul`
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    font-size: 1.8rem;
    color: var(--gray2);
    line-height: 1.1;
  }
  @media screen and (max-width: 1600px) {
    width: 20%;
    li {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 8px;
    li {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    li {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    width: 25%;
    li {
      font-size: 1.3rem;
    }
  }
`;

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("Frontend");

  const filtered = skillsData.filter((data) =>
    data.category.includes(selectedTab)
  );

  return (
    <Container id="skills">
      <Title title={"SKILLS"} />
      <div className="inner">
        <SubTitle>이런 기술들을 사용해보았습니다.</SubTitle>
        <SkillsTabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
        <SkillsList>
          {filtered.map((data, index) => (
            <li key={`${data.category}-${index}`}>
              <Number>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</Number>
              <SkillDesc>
                <Tit>{data.skill}</Tit>
                <Desc>{data.desc}</Desc>
              </SkillDesc>
              <Tags>
                {data.tags.map((tag, index) => (
                  <li key={`${tag}-${index}`}>#{tag}</li>
                ))}
              </Tags>
            </li>
          ))}
          {/* <li>
            <Number>01</Number>
            <SkillDesc>
              <Tit>React</Tit>
              <Desc>
                컴포넌트 어쩌구 컴포넌트어
                <br />
                컴포넌트 어쩌구 컴포넌트 어쩌구
              </Desc>
            </SkillDesc>
            <Tags>
              <li>Hooks</li>
              <li>Hooks</li>
              <li>Hooks</li>
            </Tags>
          </li> */}
        </SkillsList>
      </div>
    </Container>
  );
};

export default Skills;
