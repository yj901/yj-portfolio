import { useCallback, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import workData from "../../data/workData";
import { SlideBtnStyle } from "../SlideArrows";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WorkCard from "./WorkCard";

const SliderSection = styled.section`
  /* border: 1px solid #f00; */
  position: relative;
  margin-top: 95px;
  margin-left: calc((100% - 1400px) / 2);
  margin-right: 150px;
  @media screen and (max-width: 1600px) {
    margin-left: 5.2%;
  }
  @media screen and (max-width: 1400px) {
    margin-left: 3%;
    margin-right: 110px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 3%;
    margin-right: 3%;
  }
`;

const SlideArrWrap = styled.div`
  position: absolute;
  z-index: 2;
  top: -40px;
  transform: translateY(-100%);
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 1600px) {
    top: -35px;
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    top: -30px;
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    top: -20px;
    gap: 12px;
  }
  @media screen and (max-width: 600px) {
    transform: translateY(-0%);
    top: -112px;
  }
  @media screen and (max-width: 469px) {
    top: -145px;
  }
`;

const WorkSlider = () => {
  const [swiper, setSwiper] = useState();

  const handlePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const handleNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  return (
    <SliderSection>
      <SlideArrWrap>
        <SlideBtnStyle onClick={handlePrev} $color={"dark"}>
          <ArrowLeft size={30} strokeWidth={1.5} />
        </SlideBtnStyle>
        <SlideBtnStyle onClick={handleNext} $color={"dark"}>
          <ArrowRight size={30} strokeWidth={1.5} />
        </SlideBtnStyle>
      </SlideArrWrap>
      <Swiper
        spaceBetween={40}
        slidesPerView={3.3}
        onSwiper={(e) => {
          setSwiper(e);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          550: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
          1250: {
            slidesPerView: 2.6,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 2.8,
          },
          1600: {
            slidesPerView: 3.3,
          },
        }}
      >
        {workData.map((data) => (
          <SwiperSlide key={data.id}>
            <WorkCard {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderSection>
  );
};

export default WorkSlider;
