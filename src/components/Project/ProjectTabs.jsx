import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  @media screen and (max-width: 1600px) {
    gap: 12px;
    margin-bottom: 35px;
  }
  @media screen and (max-width: 1024px) {
    gap: 10px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    gap: 8px;
    margin-bottom: 20px;
  }
`;

const TabButton = styled.button`
  padding: 10px 25px;
  border-radius: 100px;
  border: 1px solid var(--gray19);
  font-size: 1.8rem;
  font-weight: 600;
  background: ${({ $active }) => ($active ? "var(--gray19)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--light)" : "var(--gray19)")};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: var(--gray19);
    color: var(--light);
  }
  @media screen and (max-width: 1600px) {
    padding: 8px 20px;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 6px 16px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 4px 14px;
    font-size: 1.3rem;
  }
`;

const ProjectTabs = ({ selectedTab, onSelectTab }) => {
  const tabs = ["All", "React", "JavaScript", "TypeScript", "HTML/CSS"];

  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          $active={selectedTab === tab}
          onClick={() => onSelectTab(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabWrapper>
  );
};

export default ProjectTabs;
