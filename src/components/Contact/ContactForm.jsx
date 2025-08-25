import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import SwapBtn from "../SwapBtn";

const Container = styled.form`
  /* border: 1px solid #f00; */
  width: 67%;
  margin-right: 40px;
  position: relative;
  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 50px 0;
  }
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 56px;
  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
  @media screen and (max-width: 768px) {
    gap: 30px;
  }
  @media screen and (max-width: 500px) {
    gap: 20px;
  }
`;

const BottomWrap = styled.div`
  margin: 70px 0 40px;
  @media screen and (max-width: 1600px) {
    margin: 45px 0 25px;
  }
  @media screen and (max-width: 768px) {
    margin: 35px 0 20px;
  }
  @media screen and (max-width: 500px) {
    margin: 25px 0 20px;
  }
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;

  label {
    font-size: 2.2rem;
    font-weight: 400;
  }

  input,
  textarea {
    font-size: 1.6rem;
    padding-bottom: 15px;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid var(--light);
    color: var(--light);
    &::placeholder {
      transition: all 0.3s;
      opacity: 1;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }

  textarea {
    resize: none;
    height: 110px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px var(--contactbg) inset;
    -webkit-box-shadow: 0 0 0 1000px var(--contactbg) inset;
    background-clip: content-box !important;
    -webkit-text-fill-color: var(--light);
    transition: background-color 5000s ease-in-out 0s;
  }

  span {
    font-size: 1.4rem;
    opacity: 0.8;
    font-weight: 300;
    margin-top: -5px;
  }

  @media screen and (max-width: 1600px) {
    gap: 20px;
    label {
      font-size: 2rem;
    }
    input,
    textarea {
      font-size: 1.5rem;
    }
    textarea {
      height: 95px;
    }
    span {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 768px) {
    gap: 18px;
    label {
      font-size: 1.8rem;
    }
    input,
    textarea {
      font-size: 1.4rem;
      padding-bottom: 12px;
    }
    textarea {
      height: 90px;
    }
    span {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 500px) {
    gap: 15px;
    label {
      font-size: 1.6rem;
    }
    input,
    textarea {
      font-size: 1.3rem;
    }
    textarea {
      height: 80px;
    }
    span {
      font-size: 1.2rem;
      margin-top: -6px;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SuccessMessage = styled.p`
  font-size: 1.6rem;
  position: absolute;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  @media screen and (max-width: 1600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    margin-top: -18px;
  }
`;

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;

  const sendEmail = (data) => {
    if (!form.current) {
      console.log("form error");
      return;
    } else {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        (result) => {
          reset();
          setIsSent(true);
          setVisible(true);
          setTimeout(() => setVisible(false), 3000);
          setTimeout(() => setIsSent(false), 3500);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <Container ref={form} onSubmit={handleSubmit(sendEmail)}>
      <TopWrap>
        <InputStyle>
          <label htmlFor="user_name">NAME</label>
          <input
            type="text"
            name="user_name"
            placeholder="성함을 입력해주세요"
            {...register("user_name", {
              required: "성함이 입력 되지 않았습니다.",
            })}
          />
          <span>{errors?.user_name?.message}</span>
        </InputStyle>
        <InputStyle>
          <label htmlFor="user_email">EMAIL</label>
          <input
            type="email"
            name="user_email"
            placeholder="이메일을 입력해주세요"
            {...register("user_email", {
              required: "이메일이 입력 되지 않았습니다.",
            })}
          />
          <span>{errors?.user_email?.message}</span>
        </InputStyle>
      </TopWrap>
      <BottomWrap>
        <InputStyle>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            name="message"
            placeholder="내용을 입력해주세요"
            {...register("message", {
              required: "내용이 입력 되지 않았습니다.",
              minLength: {
                value: 10,
                message: "10자 이상 입력해주세요.",
              },
            })}
          />
          <span>{errors?.message?.message}</span>
        </InputStyle>
      </BottomWrap>
      {isSent && (
        <SuccessMessage $visible={visible}>
          메시지가 성공적으로 전송되었습니다.
        </SuccessMessage>
      )}
      <BtnWrap>
        <SwapBtn label={"SEND MESSAGE"} />
      </BtnWrap>
    </Container>
  );
};

export default ContactForm;
