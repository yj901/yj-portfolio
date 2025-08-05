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
`;

const SubTitle = styled.h3`
  font-size: 4.5rem;
  font-weight: 400;
  margin: 65px 0 30px;
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
`;

const Number = styled.span`
  width: 20%;
  font-size: 2.2rem;
`;

const SkillDesc = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Tit = styled.h4`
  font-size: 2.6rem;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 1.6rem;
  color: var(--gray41);
  line-height: 1.6;
`;

const Tags = styled.ul`
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  li {
    font-size: 1.8rem;
    color: var(--gray2);
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
              <Number>01</Number>
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
