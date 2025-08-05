import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import lenis from "../utils/lenis";
import { X, ArrowRight } from "lucide-react";
import Github from "./Github";

const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

const ModalBox = styled.div`
  max-width: 1300px;
  width: 90%;
  height: 90vh;
  margin: 5vh auto;
  padding: 60px 60px;
  position: relative;
  border-radius: 20px;
  background: var(--light);
  word-break: keep-all;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  font-weight: bold;
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
`;

const TextWrap = styled.div`
  width: 50%;
  /* border: 1px solid #f00; */
`;

const ImagesWrap = styled.div`
  width: 45%;
  /* border: 1px solid #0f0; */
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    border-radius: 4px;
  }
`;

const Title = styled.h3`
  font-size: 4.2rem;
  font-weight: bold;
`;

const Type = styled.p`
  font-size: 1.6rem;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  margin: 40px 0;
  line-height: 1.6;
`;

const LinkBtns = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  a {
    padding: 10px 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 100px;
    border: 1px solid var(--gray19);
    &.githubBtn {
      background: var(--gray19);
      color: var(--light);
      svg {
        fill: var(--light);
      }
    }
  }
`;

const SubTitle = styled.h4`
  margin: 65px 0 25px;
  font-size: 2.5rem;
  font-weight: 700;
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  li {
    padding: 6px 16px;
    font-size: 1.4rem;
    font-weight: 500;
    background: var(--light2);
    border-radius: 100px;
  }
`;

const FeatureList = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
  list-style: disc;
`;

const ProjectModal = ({ data, onClose }) => {
  if (!data) return null;

  useEffect(() => {
    lenis.stop();
    document.body.style.overflow = "hidden";

    return () => {
      lenis.start();
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    lenis.start();
    document.body.style.overflow = "";
    onClose();
  };

  return createPortal(
    <Overlay onClick={handleClose}>
      <ModalBox onClick={(e) => e.stopPropagation()} data-lenis-prevent>
        <CloseBtn onClick={onClose}>
          <X size={28} strokeWidth={1.5} />
        </CloseBtn>
        <ModalInner>
          <TextWrap>
            <Title>{data.title}</Title>
            <Type>
              {data.type} 프로젝트 · 제작시기 {data.date} · 제작기간{" "}
              {data.duration}
            </Type>
            <Paragraph>{data.fullDescription}</Paragraph>

            <LinkBtns>
              {data.link && (
                <a href={data.github} className="githubBtn" target="_blank">
                  <Github /> GITHUB
                </a>
              )}
              {data.github && (
                <a href={data.link} target="_blank">
                  사이트 바로가기 <ArrowRight size={22} strokeWidth={2} />
                </a>
              )}
            </LinkBtns>

            <SubTitle>사용 기술 및 언어</SubTitle>
            <TechStack>
              {data.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </TechStack>

            <SubTitle>주요 기능 및 특징</SubTitle>
            <FeatureList>
              {data.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </FeatureList>
          </TextWrap>

          <ImagesWrap>
            {data.imageList.length > 0 && (
              <ImageList>
                {data.imageList.map((src, i) => (
                  <img key={i} src={src} alt={`project-${i}`} />
                ))}
              </ImageList>
            )}
          </ImagesWrap>
        </ModalInner>
      </ModalBox>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

export default ProjectModal;
