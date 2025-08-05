import { useCallback, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import teamData from "../../data/teamData";
import { SlideBtnStyle } from "../SlideArrows";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectModal from "../ProjectModal";

const SliderSection = styled.section`
  position: relative;
  width: 1400px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  word-break: keep-all;
  font-weight: 300;
  /* border: 1px solid #f00; */
  @media screen and (max-width: 1880px) {
    width: 100%;
    padding-right: 110px;
  }
  @media screen and (max-width: 1650px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 1650px) {
    margin-top: 40px;
    padding-right: 90px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    flex-direction: column;
    flex-wrap: wrap;
    padding-right: 0px;
    gap: 20px;
  }

  .teamSlideArr {
    position: absolute;
    top: calc(50% - 16px);
    svg {
      stroke: var(--gray98);
    }
    &:first-of-type {
      left: -30px;
      transform: translate(-100%, -50%);
    }
    &:last-of-type {
      right: -30px;
      transform: translate(100%, -50%);
    }
    @media screen and (max-width: 1880px) {
      &:first-of-type {
        left: -20px;
      }
      &:last-of-type {
        right: 0;
        transform: translate(-50%, -50%);
      }
    }
    @media screen and (max-width: 1650px) {
      top: auto;
      bottom: 0;
      &:first-of-type {
        left: 45%;
        transform: translate(0, 100%);
      }
      &:last-of-type {
        right: 45%;
        transform: translate(0, 100%);
      }
    }
    @media screen and (max-width: 1500px) {
      &:first-of-type {
        left: 44%;
      }
      &:last-of-type {
        right: 44%;
      }
    }
    @media screen and (max-width: 650px) {
      &:first-of-type {
        left: 42%;
      }
      &:last-of-type {
        right: 42%;
      }
    }
    @media screen and (max-width: 500px) {
      &:first-of-type {
        left: 38%;
      }
      &:last-of-type {
        right: 38%;
      }
    }
  }

  .swiper-pagination {
    /* border: 1px solid #f00; */
    position: absolute;
    z-index: 10;
    width: auto;
    bottom: 0;
    left: 50%;
    right: auto;
    top: auto;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    .swiper-pagination-bullet {
      width: 46px;
      height: 6px;
      display: block;
      background: var(--light);
      border-radius: 100px;
      transition: opacity 0.3s;
      opacity: 0.26;
      cursor: pointer;
      &.swiper-pagination-bullet-active {
        display: block;
        opacity: 1;
      }
    }
    @media screen and (max-width: 1400px) {
      gap: 5px;
      .swiper-pagination-bullet {
        width: 40px;
        height: 5px;
      }
    }
    @media screen and (max-width: 1024px) {
      gap: 4px;
      .swiper-pagination-bullet {
        width: 35px;
        height: 4px;
      }
    }
    @media screen and (max-width: 768px) {
      gap: 3px;
      .swiper-pagination-bullet {
        width: 28px;
        height: 3px;
      }
    }
  }
`;

const SildeWrap = styled.div`
  width: 50%;
  font-size: 0;
  /* border: 1px solid #ff0; */
  .swiper-wrapper {
    width: 100%;
    padding-bottom: 32px;
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      /* border-radius: 4px; */
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1400px) {
    .swiper-wrapper {
      img {
        height: 380px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .swiper-wrapper {
      padding-bottom: 24px;
      img {
        height: 280px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .swiper-wrapper {
      padding-bottom: 18px;
      img {
        height: 300px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    .swiper-wrapper {
      padding-bottom: 18px;
      img {
        height: 230px;
      }
    }
  }
`;

const TextWrap = styled.div`
  /* border: 1px solid #0ff; */
  width: 42%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  @media screen and (max-width: 1880px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TopWrap = styled.div``;

const BotWrap = styled.div`
  padding-bottom: 32px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 24px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

const ProjectIndex = styled.p`
  font-size: 1.8rem;
  color: var(--graybb);
  @media screen and (max-width: 1400px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  margin: 18px 0;
  font-size: 5rem;
  font-family: var(--nunito);
  font-weight: 600;
  @media screen and (max-width: 1400px) {
    margin: 15px 0;
    font-size: 4rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 13px 0;
    font-size: 3.5rem;
  }
  @media screen and (max-width: 768px) {
    margin: 12px 0;
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const TeamDate = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  margin-bottom: 10px;
  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 7px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 6px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const SizePosition = styled.p`
  font-size: 1.6rem;
  margin-bottom: 24px;
  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const Desc = styled.p`
  /* border: 1px solid #0ff; */
  font-size: 1.8rem;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 1400px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    line-height: 1.5;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.35rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const TechStack = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  li {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1400px) {
    gap: 8px;
    li {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 6px;
    li {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 768px) {
    gap: 5px;
    li {
      font-size: 1.2rem;
    }
  }
`;

const ViewBtn = styled.button`
  margin-top: 35px;
  padding: 10px 20px 11px;
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--gray1);
  background: var(--light);
  border: none;
  border-radius: 100px;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    margin-top: 25px;
    padding: 8px 20px;
    font-size: 1.6rem;
    gap: 9px;
    svg {
      width: 18px;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 15px;
    padding: 6px 16px;
    font-size: 1.4rem;
    gap: 8px;
    svg {
      width: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 18px;
    padding: 4px 14px;
    font-size: 1.3rem;
    gap: 6px;
    svg {
      width: 14px;
    }
  }
`;

const TeamSlider = () => {
  const [swiper, setSwiper] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const handleNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <SliderSection>
      <SlideBtnStyle
        className="teamSlideArr"
        onClick={handlePrev}
        $color={"gray"}
      >
        <ArrowLeft size={30} strokeWidth={1.5} />
      </SlideBtnStyle>
      <SlideBtnStyle
        className="teamSlideArr"
        onClick={handleNext}
        $color={"gray"}
      >
        <ArrowRight size={30} strokeWidth={1.5} />
      </SlideBtnStyle>
      <SildeWrap>
        <Swiper
          loop={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSwiper={(e) => {
            setSwiper(e);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation
        >
          {teamData.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.thumbnail}
                alt={item.title}
                onClick={() => handleOpen(teamData[activeIndex])}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SildeWrap>
      <TextWrap>
        {teamData[activeIndex] && (
          <>
            <TopWrap>
              <ProjectIndex>
                PROJECT 0{activeIndex + 1} / 0{teamData.length}
              </ProjectIndex>
              <ProjectTitle>{teamData[activeIndex].title}</ProjectTitle>
              <TeamDate>Team Project · {teamData[activeIndex].date}</TeamDate>
              <SizePosition>
                {teamData[activeIndex].size}인 팀 협업 /{" "}
                {teamData[activeIndex].position} 역할
              </SizePosition>
              <Desc>{teamData[activeIndex].summary}</Desc>
            </TopWrap>
            <BotWrap>
              <TechStack>
                {teamData[activeIndex].techStack.map((tech, i) => (
                  <li key={i}>#{tech}</li>
                ))}
              </TechStack>
              <ViewBtn onClick={() => handleOpen(teamData[activeIndex])}>
                VIEW DETAIL
                <ArrowRight size={22} strokeWidth={2} />
              </ViewBtn>
            </BotWrap>
          </>
        )}
      </TextWrap>
      {selectedProject && (
        <ProjectModal data={selectedProject} onClose={handleClose} />
      )}
    </SliderSection>
  );
};

export default TeamSlider;
