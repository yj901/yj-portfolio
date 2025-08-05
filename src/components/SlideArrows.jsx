import styled from "styled-components";

export const SlideBtnStyle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: none;
  border: 1px solid;
  border-color: ${({ $color }) =>
    $color === "dark" ? "var(--gray19)" : "var(--gray98)"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1400px) {
    width: 50px;
    height: 50px;
    svg {
      width: 26px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    svg {
      width: 22px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    svg {
      width: 18px;
    }
  }
`;
