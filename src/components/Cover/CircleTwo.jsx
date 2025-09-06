import { useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import arr from "../../assets/icons/bigcirArr.svg";

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  /* border: 1px solid #f00; */
  @media screen and (max-width: 1024px) {
    left: 9%;
  }
  @media screen and (max-width: 768px) {
    position: static;
    transform: translateY(0%);
    margin-bottom: 10px;
  }
`;

const CirBase = styled.div`
  width: 8vw;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &:last-of-type {
    margin-left: -20px;
  }

  @media screen and (max-width: 1600px) {
    width: calc(20px + 8vw);
    &:last-of-type {
      margin-left: -15px;
    }
  }
  @media screen and (max-width: 768px) {
    width: calc(50px + 8vw);
    &:last-of-type {
      margin-left: -12px;
    }
  }
`;

const CirWithVideo = styled(CirBase)`
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    top: 0;
    left: 0;
    z-index: 0;
  }

  > *:not(video) {
    position: relative;
    z-index: 1;
  }
`;

const CirWithColor = styled(CirBase)`
  background: var(--skyarr);
  user-select: none;
  img {
    width: 53px;
  }

  @media screen and (max-width: 1600px) {
    img {
      width: calc(5px + 3vw);
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: calc(15px + 3vw);
    }
  }
`;

const PlayBtn = styled.div`
  background: #111;
  width: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    padding-left: 2px;
    width: 12px;
  }

  @media screen and (max-width: 1600px) {
    width: calc(3px + 1.7vw);
    svg {
      width: calc(5px + 0.4vw);
    }
  }
  @media screen and (max-width: 1200px) {
    width: calc(8px + 1.7vw);
    svg {
      width: calc(7px + 0.4vw);
    }
  }
  @media screen and (max-width: 768px) {
    width: calc(18px + 1.7vw);
    svg {
      width: calc(9px + 0.4vw);
    }
  }
`;

const CircleTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cirRef = useRef(null);

  const handleToggle = () => {
    gsap.to(cirRef.current, {
      borderRadius: isOpen ? "50%" : "0%",
      duration: 0.5,
      ease: "expo.out",
    });
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <CirWithVideo ref={cirRef}>
        <video autoPlay muted loop playsInline src="/videos/sky1280x720.mp4" />
        <PlayBtn onClick={handleToggle}>
          <svg viewBox="0 0 10 12" fill="none">
            <path d="M0 0L9.33333 6L0 12V0Z" fill="white" />
          </svg>
        </PlayBtn>
      </CirWithVideo>

      <CirWithColor>
        <img src={arr} />
      </CirWithColor>
    </Container>
  );
};

export default CircleTwo;
