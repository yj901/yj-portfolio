import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
`;

const Gnb = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    /* background: #ff0; */
    &:hover {
      &::before {
        width: 23px;
        height: 23px;
        opacity: 1;
      }
      &::after {
        left: 32px;
        opacity: 1;
      }
    }
    span {
      background: var(--gray41);
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid var(--graybb);
      border-radius: 50%;
      width: 0px;
      height: 0px;
      opacity: 0;
      transition: all 0.4s ease;
    }
    &::after {
      content: "TEST";
      display: block;
      position: absolute;
      font-size: 1.6rem;
      font-weight: 400;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      opacity: 0;
      /* visibility: hidden; */
      transition: all 0.4s ease;
      transition-delay: 0.1s;
    }
  }
`;

const SideNav = () => {
  return (
    <Container>
      <Gnb>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
      </Gnb>
    </Container>
  );
};

export default SideNav;
