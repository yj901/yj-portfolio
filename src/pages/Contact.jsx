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
`;

const TopWrap = styled.div`
  height: 100%;
  display: flex;
`;

const BottomWrap = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  address {
    font-size: 1.4rem;
    font-weight: 300;
    opacity: 0.5;
    text-align: center;
    padding: 34px 0;
  }
`;

const LeftSide = styled.div`
  width: 36%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  & > div {
    position: absolute;
    margin-left: 5.3%;
  }
`;

const RightSide = styled.div`
  width: 64%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 6.5rem;
  font-family: var(--nunito);
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 300;
  margin: 35px 0 22px;
`;

const IntroList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

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
`;

const Contact = () => {
  return (
    <Container id="contact">
      <TopWrap>
        <LeftSide>
          <div>
            <Title>CONTACT</Title>
            <Desc>
              끝까지 읽어주셔서 감사합니다.
              <br /> 연락 주시면 성실히 답변드리겠습니다.
            </Desc>
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
          </div>
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
