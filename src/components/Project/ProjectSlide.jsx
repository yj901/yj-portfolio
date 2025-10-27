import { useCallback, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import projectData from "../../data/projectData";
import ProjectTabs from "./ProjectTabs";
import ProjectCard from "./ProjectCard";
import { SlideBtnStyle } from "../SlideArrows";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectModal from "../ProjectModal";

const SliderSection = styled.section`
  /* border: 1px solid #f00; */
  position: relative;
  margin-top: 30px;
  /* margin-left: calc((100% - 1400px) / 2); */
  margin-left: 10%;
  margin-right: 150px;
  @media screen and (max-width: 1680px) {
    margin-left: 5.2%;
  }
  @media screen and (max-width: 1400px) {
    margin-left: 3%;
    margin-right: 110px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 3%;
    margin-right: 3%;
    .swiper {
      overflow: visible;
    }
  }
`;

const SlideWrap = styled.div`
  position: relative;
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
  @media screen and (max-width: 500px) {
    top: -108px;
  }
  @media screen and (max-width: 469px) {
    top: -141px;
  }
`;

const ProjectSlide = () => {
  const [swiper, setSwiper] = useState();
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    selectedTab === "All"
      ? projectData
      : projectData.filter((data) => data.category.includes(selectedTab));

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
      <ProjectTabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <SlideWrap>
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
          slidesPerView={2.8}
          onSwiper={(e) => {
            setSwiper(e);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 15,
            },
            550: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1250: {
              slidesPerView: 2.4,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 2.6,
            },
            1600: {
              slidesPerView: 2.8,
            },
            1700: {
              slidesPerView: 2.8,
            },
          }}
        >
          {filtered.map((data) => (
            <SwiperSlide key={data.id}>
              <ProjectCard {...data} onClick={() => handleOpen(data)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideWrap>
      {selectedProject && (
        <ProjectModal data={selectedProject} onClose={handleClose} />
      )}
    </SliderSection>
  );
};

export default ProjectSlide;
