import styled from "styled-components";
import gsap from "gsap";
import { useRef } from "react";

const Container = styled.div`
  position: relative;
  padding-right: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1600px) {
    padding-right: 38px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 32px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1600px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (max-width: 1024px) {
    width: 32px;
    height: 32px;
  }
`;

const LeftIcon = styled(Icon)`
  left: 0;
  @media screen and (max-width: 1024px) {
    svg {
      width: 10px;
    }
  }
`;

const RightIcon = styled(Icon)`
  right: 0;
  @media screen and (max-width: 1024px) {
    svg {
      width: 10px;
    }
  }
`;

const TextBtn = styled.button`
  background: var(--light);
  color: var(--gray1);
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0 25px;
  height: 42px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1600px) {
    font-size: 1.6rem;
    padding: 0 20px;
    height: 38px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    padding: 0 15px;
    height: 32px;
  }
`;

const SwapBtn = ({ label, onClick }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  const handleEnter = () => {
    const isPc2 = window.innerWidth <= 1600;
    const isTablet = window.innerWidth <= 1024;
    const isMobile = window.innerWidth <= 768;
    const shiftX = isMobile ? 32 : isTablet ? 32 : isPc2 ? 38 : 42;

    const tl = gsap.timeline();
    tl.to(rightRef.current, {
      opacity: 0,
      x: 10,
      duration: 0.3,
    })
      .to(
        textRef.current,
        {
          x: shiftX,
          duration: 0.3,
        },
        "<"
      )
      .to(
        leftRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        "<"
      );
  };

  const handleLeave = () => {
    const tl = gsap.timeline();
    tl.to(leftRef.current, {
      opacity: 0,
      x: -10,
      duration: 0.3,
    })
      .to(
        textRef.current,
        {
          x: 0,
          duration: 0.3,
        },
        "<"
      )
      .to(
        rightRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        "<"
      );
  };

  return (
    <Container
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      <LeftIcon
        ref={leftRef}
        style={{ opacity: 0, transform: "translateX(-10px)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.46454 1.05025C1.46458 0.785087 1.56994 0.530795 1.75743 0.343296C1.94493 0.155796 2.19923 0.0504429 2.46439 0.0504029H10.9497C11.2148 0.0504429 11.4691 0.155796 11.6566 0.343296C11.8441 0.530795 11.9495 0.785087 11.9495 1.05025L11.9495 9.53553C11.945 9.7977 11.8376 10.0476 11.6506 10.2314C11.4636 10.4152 11.2119 10.5182 10.9497 10.5182C10.6875 10.5182 10.4357 10.4152 10.2487 10.2314C10.0617 10.0476 9.95438 9.7977 9.94982 9.53553L9.94982 3.46431L1.75728 11.6569C1.56975 11.8444 1.31539 11.9497 1.05018 11.9497C0.78496 11.9497 0.530607 11.8444 0.34307 11.6569C0.155534 11.4693 0.0501767 11.215 0.0501767 10.9497C0.0501767 10.6845 0.155534 10.4302 0.34307 10.2426L8.53561 2.0501L2.46439 2.0501C2.19923 2.05006 1.94493 1.94471 1.75743 1.75721C1.56994 1.56971 1.46458 1.31542 1.46454 1.05025Z"
            fill="#111111"
          />
        </svg>
      </LeftIcon>
      <TextBtn ref={textRef}>
        <div>{label}</div>
      </TextBtn>
      <RightIcon ref={rightRef}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.46454 1.05025C1.46458 0.785087 1.56994 0.530795 1.75743 0.343296C1.94493 0.155796 2.19923 0.0504429 2.46439 0.0504029H10.9497C11.2148 0.0504429 11.4691 0.155796 11.6566 0.343296C11.8441 0.530795 11.9495 0.785087 11.9495 1.05025L11.9495 9.53553C11.945 9.7977 11.8376 10.0476 11.6506 10.2314C11.4636 10.4152 11.2119 10.5182 10.9497 10.5182C10.6875 10.5182 10.4357 10.4152 10.2487 10.2314C10.0617 10.0476 9.95438 9.7977 9.94982 9.53553L9.94982 3.46431L1.75728 11.6569C1.56975 11.8444 1.31539 11.9497 1.05018 11.9497C0.78496 11.9497 0.530607 11.8444 0.34307 11.6569C0.155534 11.4693 0.0501767 11.215 0.0501767 10.9497C0.0501767 10.6845 0.155534 10.4302 0.34307 10.2426L8.53561 2.0501L2.46439 2.0501C2.19923 2.05006 1.94493 1.94471 1.75743 1.75721C1.56994 1.56971 1.46458 1.31542 1.46454 1.05025Z"
            fill="#111111"
          />
        </svg>
      </RightIcon>
    </Container>
  );
};

export default SwapBtn;
