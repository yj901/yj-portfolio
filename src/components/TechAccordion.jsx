import styled from "styled-components";

const AccordionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.details`
  border-radius: 12px;
  padding: 12px 16px;
  background: var(--light2);
  cursor: pointer;

  summary {
    list-style: none;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
  }
  summary::-webkit-details-marker {
    display: none; /* 기본 삼각형 아이콘 제거 */
  }
`;

const Desc = styled.div`
  margin-top: 8px;
  font-size: 1.4rem;
  line-height: 1.6;
  opacity: 0.85;
`;

const TechAccordion = ({ techDetails }) => {
  if (!techDetails) return null;
  return (
    <AccordionWrap>
      {techDetails.map((t, i) => (
        <Item key={i}>
          <summary>{t.name}</summary>
          <Desc>{t.summary}</Desc>
        </Item>
      ))}
    </AccordionWrap>
  );
};

export default TechAccordion;
