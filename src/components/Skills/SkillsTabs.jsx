import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
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
`;

const SkillsTabs = React.memo(({ selectedTab, onSelectTab }) => {
  const tabs = ["Frontend", "Library / Framework", "Tools", "Design"];

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
});

export default SkillsTabs;
