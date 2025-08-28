// Lightbox.jsx
import { useEffect } from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  @media screen and (max-width: 768px) {
    max-width: 96vw;
  }
`;

const BigImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  user-select: none;
  @media screen and (max-width: 768px) {
    max-width: 96vw;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  border: 0;
  padding: 6px 12px;
  border-radius: 100px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    gap: 1px;
    padding: 6px 8px;
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const LightBox = ({ src, alt = "preview", onClose }) => {
  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!src) return null;
  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()} data-lenis-prevent>
        <CloseBtn onClick={onClose}>
          <X size={16} /> 닫기
        </CloseBtn>
        <BigImg src={src} alt={alt} />
      </Box>
    </Overlay>
  );
};

export default LightBox;
