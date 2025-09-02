import { useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "lucide-react";

const AccordionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    gap: 8px;
  }
`;

const Item = styled.div`
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--light2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    border-radius: 8px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 14px;
  }
`;

const Tit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 1.65rem;
    font-weight: 600;
  }
  svg {
    color: var(--grayd1);
    transform: ${({ $open }) => ($open ? `rotate(180deg)` : `rotate(0deg)`)};
  }
  @media screen and (max-width: 1400px) {
    h5 {
      font-size: 1.6rem;
    }
    svg {
      width: 18px;
    }
  }
  @media screen and (max-width: 1024px) {
    h5 {
      font-size: 1.5rem;
    }
    svg {
      width: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    h5 {
      font-size: 1.4rem;
    }
    svg {
      width: 16px;
    }
  }
`;

const Panel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.28s ease;
`;
const Body = styled.div`
  overflow: hidden;
  padding: ${({ $open }) => ($open ? "6px 0 0" : "0")};
  transition: padding 0.28s ease, opacity 0.2s ease;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--gray3);

  & > div {
    margin-top: 5px;
  }

  @media screen and (max-width: 1400px) {
    font-size: 1.45rem;
    padding: ${({ $open }) => ($open ? "5px 0 0" : "0")};
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    padding: ${({ $open }) => ($open ? "4px 0 0" : "0")};
  }
  @media screen and (max-width: 768px) {
    font-size: 1.35rem;
    line-height: 1.4;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const UsedFor = styled.span`
  font-size: 1.35rem;
  color: var(--gray6);
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 3px;
    background: var(--gray6);
    border-radius: 50%;
    margin-right: 4px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.4;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    &::before {
      width: 2px;
      height: 2px;
    }
  }
`;

const TechAccordion = ({ techDetails }) => {
  if (!techDetails) return null;

  const [openSet, setOpenSet] = useState(new Set());

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <AccordionWrap>
      {techDetails.map((t, i) => {
        const open = openSet.has(i);
        return (
          <Item key={i} onClick={() => toggle(i)}>
            <Tit $open={open}>
              <h5>{t.name}</h5>
              <ChevronDownIcon size={20} strokeWidth={2.2} />
            </Tit>
            <Panel $open={open}>
              <Body $open={open}>
                {t.summary}
                <div>
                  {t.usedFor.map((used, i) => (
                    <UsedFor key={`usedFor${i}`}>{used} </UsedFor>
                  ))}
                </div>
              </Body>
            </Panel>
          </Item>
        );
      })}
    </AccordionWrap>
  );
};

export default TechAccordion;
