import styled from "styled-components";
import CircleTwo from "./CircleTwo";

const Container = styled.div`
  width: 1400px;
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h2`
  font-family: var(--nunito);
  font-size: 23.5rem;
  font-weight: 500;
  line-height: 0.91;
  position: relative;
  &:nth-child(1) {
    width: 100%;
    text-align: right;
    padding-right: 20px;
    /* border: 1px solid #f00; */
  }
  &:nth-child(3) {
    width: 100%;
    text-align: right;
    /* border: 1px solid #f00; */
  }
`;

const Txt2 = styled.p`
  position: absolute;
  top: 20%;
  left: 7%;
  font-size: 2rem;
  font-family: "Pretendard", sans-serif;
  font-weight: 200;
  line-height: 1.1;
  letter-spacing: 0.01em;
  position: absolute;
  text-align: left;
`;

const Typography = () => {
  return (
    <Container>
      <TextWrap>
        <Text>
          <CircleTwo />
          SHAPED
        </Text>
        <Text>DYNAMIC</Text>
        <Text>
          <Txt2>
            Ideas into UI
            <br /> UI into experience
            <br /> Frontend developer,
            <br /> Gu Yeojin
          </Txt2>
          SYSTEMS
        </Text>
      </TextWrap>
    </Container>
  );
};

export default Typography;
