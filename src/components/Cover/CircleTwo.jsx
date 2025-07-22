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
`;

const CirBase = styled.div`
  width: 150px;
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
`;

const CirWithVideo = styled(CirBase)`
  background: #000;

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
