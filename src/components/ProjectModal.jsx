import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import lenis from "../utils/lenis";
import { X, ArrowRight } from "lucide-react";
import Github from "./Github";
import TechAccordion from "./TechAccordion";
import { Check } from "lucide-react";
import LightBox from "./LightBox";

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
  padding: 60px;
  position: relative;
  border-radius: 20px;
  background: var(--light);
  word-break: keep-all;
  @media screen and (max-width: 1400px) {
    padding: 50px;
  }
  @media screen and (max-width: 1024px) {
    padding: 42px;
  }
  @media screen and (max-width: 768px) {
    padding: 36px;
    border-radius: 16px;
  }
  @media screen and (max-width: 500px) {
    padding: 28px;
    width: 92%;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  @media screen and (max-width: 768px) {
    top: 10px;
    right: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TextWrap = styled.div`
  width: 55%;
  /* border: 1px solid #f00; */
  @media screen and (max-width: 1400px) {
    width: 56%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImagesWrap = styled.div`
  width: 40%;
  /* border: 1px solid #0f0; */
  h4 {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    h4 {
      display: block;
    }
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h3`
  font-size: 4.2rem;
  font-weight: bold;
  @media screen and (max-width: 1400px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
  }
`;

const Type = styled.p`
  font-size: 1.6rem;
  margin-top: 20px;
  line-height: 1.3;
  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
    margin-top: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    margin-top: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
    margin-top: 14px;
    border-left: 2px solid var(--grayd1);
    padding-left: 8px;
    span {
      display: block;
      &.dot {
        display: none;
      }
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  margin: 40px 0;
  line-height: 1.6;
  white-space: pre-line;
  @media screen and (max-width: 1400px) {
    font-size: 1.6rem;
    margin: 36px 0;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 30px 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.45rem;
    line-height: 1.5;
    margin: 26px 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.35rem;
    line-height: 1.4;
    margin: 20px 0;
  }
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

  @media screen and (max-width: 1600px) {
    gap: 14px;
    a {
      padding: 8px 20px;
      font-size: 1.6rem;
      gap: 9px;
      svg {
        width: 18px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 12px;
    a {
      padding: 6px 16px;
      font-size: 1.4rem;
      gap: 8px;
      svg {
        width: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    gap: 8px;
    a {
      padding: 4px 14px;
      font-size: 1.3rem;
      gap: 6px;
      svg {
        width: 14px;
      }
    }
  }
`;

const SubTitle = styled.h4`
  margin: 65px 0 25px;
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 1400px) {
    margin: 58px 0 22px;
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 50px 0 20px;
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    margin: 46px 0 18px;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    margin: 42px 0 14px;
    font-size: 1.7rem;
  }
`;

const FeatureList = styled.ul`
  margin: 20px 0;

  li {
    display: flex;
    align-items: center;
    gap: 6px;
    p {
      font-size: 1.7rem;
      line-height: 1.7;
    }
    svg {
      color: var(--check);
      transform: translateY(1px);
    }
  }
  @media screen and (max-width: 1400px) {
    li {
      p {
        font-size: 1.6rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    li {
      gap: 4px;
      p {
        font-size: 1.5rem;
        line-height: 1.6;
      }
      svg {
        width: 17px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    li {
      gap: 4px;
      p {
        font-size: 1.45rem;
      }
      svg {
        width: 16px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    li {
      gap: 4px;
      p {
        font-size: 1.35rem;
        line-height: 1.5;
      }
      svg {
        width: 14px;
      }
    }
  }
`;

const ContribList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  li {
    padding: 22px;
    border-radius: 10px;
    border: 1px solid var(--grayd1);
    /* background: var(--light2); */
    h5 {
      margin-bottom: 12px;
      font-size: 1.8rem;
      font-weight: 600;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
      color: var(--gray3);
    }
  }
  @media screen and (max-width: 1400px) {
    li {
      h5 {
        font-size: 1.75rem;
      }
      p {
        font-size: 1.46rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 12px;
    li {
      padding: 18px;
      border-radius: 8px;
      h5 {
        margin-bottom: 10px;
        font-size: 1.65rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    gap: 12px;
    li {
      padding: 16px;
      h5 {
        font-size: 1.5rem;
        margin-bottom: 7px;
      }
      p {
        font-size: 1.35rem;
        line-height: 1.4;
      }
    }
  }
  @media screen and (max-width: 600px) {
    gap: 8px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 500px) {
    li {
      padding: 14px;
      h5 {
        font-size: 1.4rem;
        margin-bottom: 6px;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const TroubleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  li {
    padding: 22px;
    border-radius: 10px;
    background: var(--light2);
    h5 {
      margin-bottom: 12px;
      font-size: 1.8rem;
      font-weight: 600;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
      color: var(--gray3);
    }
  }
  @media screen and (max-width: 1400px) {
    li {
      h5 {
        font-size: 1.75rem;
      }
      p {
        font-size: 1.46rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 12px;
    li {
      padding: 20px;
      border-radius: 8px;
      h5 {
        margin-bottom: 10px;
        font-size: 1.65rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    gap: 12px;
    li {
      padding: 16px;
      h5 {
        font-size: 1.5rem;
        margin-bottom: 7px;
      }
      p {
        font-size: 1.35rem;
        line-height: 1.4;
      }
    }
  }
  @media screen and (max-width: 600px) {
    gap: 8px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 500px) {
    li {
      padding: 14px;
      h5 {
        font-size: 1.4rem;
        margin-bottom: 6px;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const ProjectModal = ({ data, onClose }) => {
  if (!data) return null;
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

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
    <>
      <Overlay onClick={handleClose}>
        <ModalBox onClick={(e) => e.stopPropagation()} data-lenis-prevent>
          <CloseBtn onClick={onClose}>
            <X size={28} strokeWidth={1.5} />
          </CloseBtn>
          <ModalInner>
            <TextWrap>
              <Title>{data.title}</Title>
              <Type>
                <span>
                  {data.type === "팀" && data.size && `${data.size}인 `}
                  {data.type} 프로젝트
                </span>
                <span className="dot">·</span>
                <span> 제작시기 {data.date}</span>{" "}
                <span className="dot">·</span>{" "}
                <span>제작기간 {data.duration}</span>
              </Type>
              <Paragraph>{data.fullDescription}</Paragraph>

              <LinkBtns>
                {data.github && (
                  <a href={data.github} className="githubBtn" target="_blank">
                    <Github /> GITHUB
                  </a>
                )}
                {data.link && (
                  <a href={data.link} target="_blank">
                    사이트 바로가기 <ArrowRight size={22} strokeWidth={2} />
                  </a>
                )}
              </LinkBtns>

              <SubTitle>주요 기능 및 특징</SubTitle>
              <FeatureList>
                {data.features.map((f, i) => (
                  <li key={`tech${i + 1}`}>
                    <Check size={18} strokeWidth={2.5} />
                    <p key={i}>{f}</p>
                  </li>
                ))}
              </FeatureList>

              <SubTitle>사용 기술 및 언어</SubTitle>
              <TechAccordion techDetails={data.techDetails} />

              {data.type === "팀" && data.contributions && (
                <>
                  <SubTitle>담당 역할 및 기여도</SubTitle>
                  <ContribList>
                    {data.contributions.map((c, i) => (
                      <li key={i}>
                        <h5>{c.title}</h5>
                        <p>{c.desc}</p>
                      </li>
                    ))}
                  </ContribList>
                </>
              )}

              {data.troubleshooting && data.troubleshooting.length > 0 && (
                <>
                  <SubTitle>트러블슈팅</SubTitle>
                  <TroubleList>
                    {data.troubleshooting.map((t, i) => (
                      <li key={i}>
                        <h5>{t.title}</h5>
                        <p>{t.desc}</p>
                      </li>
                    ))}
                  </TroubleList>
                </>
              )}
            </TextWrap>

            <ImagesWrap>
              <SubTitle>작업 화면</SubTitle>
              {data.imageList.length > 0 && (
                <ImageList>
                  {data.imageList.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`project-${i}`}
                      loading="lazy"
                      onClick={() => openLightbox(src)}
                      style={{ cursor: "zoom-in" }}
                    />
                  ))}
                </ImageList>
              )}
            </ImagesWrap>
          </ModalInner>
        </ModalBox>
      </Overlay>
      {lightboxSrc && <LightBox src={lightboxSrc} onClose={closeLightbox} />}
    </>,
    document.getElementById("modal-root")
  );
};

export default ProjectModal;
