import styled from "styled-components";
import Github from "../components/Github";
import iconMail from "../assets/icons/Mail.svg";
import iconPhone from "../assets/icons/Phone.svg";
import ContactForm from "../components/Contact/ContactForm";

const Container = styled.section`
  background: var(--contactbg);
  width: 100%;
  height: 100vh;
  color: var(--light);
  position: relative;
  z-index: 7;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 80px;
  }
  @media screen and (max-width: 500px) {
    height: auto;
    padding-top: 65px;
  }
`;

const TopWrap = styled.div`
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0 3%;
  }
`;

const BottomWrap = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  address {
    padding: 34px 0;
    font-size: 1.4rem;
    text-align: center;
    font-weight: 300;
    opacity: 0.5;
  }
  @media screen and (max-width: 1024px) {
    address {
      padding: 28px 0;
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 768px) {
    address {
      padding: 25px 0;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 500px) {
    address {
      padding: 20px 0;
      font-size: 1.1rem;
    }
  }
`;

const LeftSide = styled.div`
  width: 36%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  @media screen and (max-width: 1600px) {
    width: 33%;
  }
  @media screen and (max-width: 1024px) {
    width: 35%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const RightSide = styled.div`
  width: 64%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1600px) {
    width: 67%;
  }
  @media screen and (max-width: 1024px) {
    width: 65%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LeftSideWrap = styled.div`
  position: absolute;
  margin-left: 5.3%;
  @media screen and (max-width: 1400px) {
    margin-left: 3%;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    margin-left: 0;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 500px) {
    position: relative;
    padding-bottom: 0px;
  }
`;

const Title = styled.h3`
  font-size: 6.5rem;
  font-family: var(--nunito);
  font-weight: 600;
  @media screen and (max-width: 1600px) {
    font-size: 5.5rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
    margin-bottom: 16px;
  }
`;

const Desc = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 300;
  margin: 35px 0 22px;
  @media screen and (max-width: 1600px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    margin: 26px 0 18px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 52%;
    display: inline-block;
    vertical-align: top;
  }
  @media screen and (max-width: 500px) {
    margin: 0 0 15px;
    font-size: 1.3rem;
    width: 100%;
  }
`;

const DescWrap = styled.div`
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const IntroList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    font-size: 1.6rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 22px;
      filter: invert(1);
    }
  }
  @media screen and (max-width: 1600px) {
    gap: 6px;
    li {
      font-size: 1.5rem;
      gap: 10px;
      img {
        width: 20px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 6px;
    li {
      font-size: 1.4rem;
      gap: 8px;
      img {
        width: 18px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    gap: 4px;
    li {
      font-size: 1.3rem;
      gap: 8px;
      img {
        width: 16px;
      }
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
    color: var(--gray1);
    background: var(--light);
    border: 1px solid var(--light);
  }
  @media screen and (max-width: 1600px) {
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
    position: absolute;
    margin-top: 25px;
    left: 0;
    a {
      padding: 4px 14px;
      font-size: 1.3rem;
      gap: 6px;
      svg {
        width: 14px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    position: static;
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <TopWrap>
        <LeftSide>
          <LeftSideWrap>
            <Title>CONTACT</Title>
            <Desc>
              끝까지 읽어주셔서 감사합니다.
              <br /> 연락 주시면 성실히 답변드리겠습니다.
            </Desc>
            <DescWrap>
              <IntroList>
                <li>
                  <img src={iconMail} alt="icon" />
                  <p>901yj@kakao.com</p>
                </li>
                <li>
                  <img src={iconPhone} alt="icon" />
                  <p>010-6419-6495</p>
                </li>
              </IntroList>
              <BtnWrap>
                <a href="https://github.com/yj901" target="_blank">
                  <Github fill={"#111"} />
                  GITHUB
                </a>
              </BtnWrap>
            </DescWrap>
          </LeftSideWrap>
        </LeftSide>
        <RightSide>
          <ContactForm />
        </RightSide>
      </TopWrap>
      <BottomWrap>
        <address>Copyright © 2025 GU YEOJIN. All Rights Reserved.</address>
      </BottomWrap>
    </Container>
  );
};

export default Contact;
