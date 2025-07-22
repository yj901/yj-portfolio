import styled from "styled-components";
import Title from "../components/Title";
import iconMail from "../assets/icons/Mail.svg";
import iconCalendar from "../assets/icons/Calendar.svg";
import iconPhone from "../assets/icons/Phone.svg";
import Github from "../components/Github";
import LottieAni from "../components/About/LottieAni";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 920px;

  .heroIcon {
    width: 24px;
  }

  .lottie {
    position: absolute;
    right: 11%;
    bottom: 6%;
  }
`;

const ProfileWrap = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 80px;
`;

const ImgWrap = styled.div``;

const Img = styled.div`
  width: 225px;
  height: 225px;
  border-radius: 50%;
  background: #ddd;
  overflow: hidden;
`;

const TxtWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 6.5rem;
  font-family: var(--nunito);
  font-weight: 600;
  margin-right: 20px;
  span {
    font-family: "Pretendard", sans-serif;
    font-size: 2.6rem;
    font-weight: 400;
  }
`;

const Support = styled.h4`
  font-size: 3.4rem;
  font-weight: 500;
`;

const Hr = styled.hr`
  width: 120px;
  border: none;
  border-top: 1px solid var(--grayd1);
  margin: 20px 0;
`;

const Introduce = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.8;

  b {
    font-weight: 700;
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
`;

const BtnWrap = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    display: block;
    border-radius: 100px;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 10px 25px;

    display: flex;
    align-items: center;
    gap: 10px;

    &:nth-of-type(1) {
      color: var(--light);
      background: var(--gray19);
      border: 1px solid var(--gray19);
    }
    &:nth-of-type(2) {
      border: 1px solid var(--graybb);
    }
  }
`;

const About = () => {
  return (
    <Container>
      <Title title={"WHO AM I"} />
      <ProfileWrap className="inner">
        <ImgWrap>
          <Img />
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
              <br /> 아이디어를 구현하는 프론트엔드 개발자 <b>구여진</b>입니다.
            </p>
            <p>
              웹퍼블리셔로 1년간 구조적인 퍼블리싱과 시각 완성도를 경험했고
              <br /> 현재는 <b>React</b> 기반 UI 구성과 <b>인터랙션 개발</b>에
              집중하고 있습니다.
            </p>
            <p>
              작지만 명확한 기능이 쌓여 완성되는 그 순간에 개발의 즐거움을
              느낍니다.
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
            <a href="https://github.com/yj901" target="_blank">
              RESUME
            </a>
          </BtnWrap>
        </TxtWrap>
      </ProfileWrap>
      <LottieAni />
    </Container>
  );
};

export default About;
