import styled from "styled-components";
import Title from "../components/Title";
import iconMail from "../assets/icons/Mail.svg";
import iconCalendar from "../assets/icons/Calendar.svg";
import iconPhone from "../assets/icons/Phone.svg";
import Github from "../components/Github";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import RotateAni from "../components/About/RotateAni";
import profileImg from "../assets/imgs/yj400.jpg";

const Container = styled.section`
  position: relative;
  background: var(--light);
  z-index: 0;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  word-break: keep-all;

  .rotateAni {
    /* border: 1px solid #f00; */
    position: absolute;
    right: 11%;
    bottom: 6%;
    z-index: -1;
    width: 480px;
    video {
      width: 100%;
    }
  }
  @media screen and (max-width: 1700px) {
    min-height: auto;
    .rotateAni {
      width: 400px;
    }
  }
  @media screen and (max-width: 1600px) {
    .rotateAni {
      width: 350px;
      bottom: 13%;
    }
  }
  @media screen and (max-width: 1250px) {
    .rotateAni {
      width: 300px;
      right: 8%;
      bottom: 14%;
    }
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    padding-bottom: 100px;
    .rotateAni {
      width: 240px;
      bottom: 5%;
    }
  }
  @media screen and (max-width: 768px) {
    .rotateAni {
      width: 220px;
      right: 7%;
      bottom: 4%;
    }
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 80px;
    .rotateAni {
      width: 150px;
      right: 4%;
      bottom: 4%;
    }
  }
`;

const ProfileWrap = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 80px;
  @media screen and (max-width: 1600px) {
    gap: 60px;
  }
  @media screen and (max-width: 1024px) {
    gap: 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    padding-top: 40px;
  }
  @media screen and (max-width: 500px) {
    gap: 20px;
    padding-top: 30px;
  }
`;

const ImgWrap = styled.div``;

const Img = styled.img`
  width: 225px;
  height: 225px;
  object-fit: cover;
  border-radius: 50%;
  background: #ddd;
  overflow: hidden;
  @media screen and (max-width: 1600px) {
    width: 180px;
    height: 180px;
  }
  @media screen and (max-width: 1024px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

const TxtWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 6.5rem;
  font-family: var(--nunito);
  font-weight: 600;
  span {
    font-family: "Pretendard", sans-serif;
    font-size: 2.6rem;
    font-weight: 400;
  }
  @media screen and (max-width: 1600px) {
    font-size: 5.5rem;
    span {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 4.8rem;
    span {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 4rem;
    span {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
    span {
      font-size: 1.5rem;
    }
  }
`;

const Support = styled.h4`
  font-size: 3.4rem;
  font-weight: 500;
  @media screen and (max-width: 1600px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const Hr = styled.hr`
  width: 120px;
  border: none;
  border-top: 1px solid var(--grayd1);
  margin: 20px 0;
  @media screen and (max-width: 1600px) {
    width: 100px;
    margin: 18px 0;
  }
  @media screen and (max-width: 1024px) {
    width: 80px;
    margin: 16px 0;
  }
  @media screen and (max-width: 768px) {
    width: 65px;
    margin: 14px 0;
  }
`;

const Introduce = styled.div`
  /* font-size: 1.8rem; */
  font-size: 0.8vw;
  font-weight: 400;
  line-height: 1.8;
  b {
    font-weight: 700;
  }
  @media screen and (max-width: 2300px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 1600px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 1.7;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.6;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.35rem;
    line-height: 1.6;
    .none500 {
      display: none;
    }
  }
`;

const IntroList = styled.ul`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    &:first-child {
      color: var(--gray9);
    }
    font-size: 1.8rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 24px;
    }
  }

  @media screen and (max-width: 1600px) {
    margin-top: 22px;
    gap: 10px;
    li {
      font-size: 1.6rem;
      gap: 10px;
      img {
        width: 20px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    gap: 9px;
    li {
      font-size: 1.5rem;
      gap: 8px;
      img {
        width: 18px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 16px;
    gap: 9px;
    li {
      font-size: 1.4rem;
      gap: 6px;
      img {
        width: 16px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 14px;
    gap: 7px;
    li {
      font-size: 1.3rem;
      gap: 4px;
      img {
        width: 14px;
      }
    }
  }
`;

const BtnWrap = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 16px;

  a {
    padding: 10px 25px;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:nth-of-type(1) {
      color: var(--light);
      background: var(--gray19);
    }
    &:nth-of-type(2) {
      border: 1px solid var(--graybb);
    }
  }
  @media screen and (max-width: 1600px) {
    margin-top: 22px;
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
    margin-top: 20px;
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
    margin-top: 15px;
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

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      return ScrollTrigger.create({
        id: "about",
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Container ref={sectionRef} id="about">
      <Title title={"WHO AM I"} />
      <ProfileWrap className="inner">
        <ImgWrap>
          <Img src={profileImg} alt={"profileYJ"} />
        </ImgWrap>
        <TxtWrap>
          <Name>
            GU YEOJIN <span>구여진</span>
          </Name>
          <Support>Frontend Developer</Support>
          <Hr />
          <Introduce>
            <p>
              사용자 흐름과 인터페이스를 고민하며
              <br />
              작은 디테일까지 완성하는 프론트엔드 개발자 <b>구여진</b>
              입니다.
            </p>
            <p>
              1년간 웹퍼블리셔로 다진 구조적 마크업과 웹 표준 기반을 바탕으로
              <br className="none500" /> 현재는 <b>React</b> 기반의 UI 구성과{" "}
              <b>사용자 경험 향상</b>에 집중하고 있습니다.
            </p>
            <p>
              확장성과 유지보수성을 놓치지 않고,
              <br />
              사용자가 자연스럽게 머물 수 있는 웹을 구현하고자 합니다.
            </p>
          </Introduce>
          <IntroList>
            <li>Web Publisher, 1 year (2023.11 - 2024.11)</li>
            <li>
              <img src={iconMail} alt="icon" />
              <p>901yj@kakao.com</p>
            </li>
            <li>
              <img src={iconCalendar} alt="icon" />
              <p>2000.01.04.</p>
            </li>
            <li>
              <img src={iconPhone} alt="icon" />
              <p>010-6419-6495</p>
            </li>
          </IntroList>
          <BtnWrap>
            <a href="https://github.com/yj901" target="_blank">
              <Github fill={"#fff"} />
              GITHUB
            </a>
            <a
              href="https://vivid-decimal-3d0.notion.site/Frontend-Developer-2a17fa1eab3680a2847ef55d47b6c78b"
              target="_blank"
            >
              RESUME
            </a>
          </BtnWrap>
        </TxtWrap>
      </ProfileWrap>
      <RotateAni />
    </Container>
  );
};

export default About;
