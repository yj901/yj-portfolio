import { useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import useNavStore from "./store/navStore";

import GlobalStyles from "./styles/GlobalStyles.styles";
import Cover from "./pages/Cover";
import About from "./pages/About";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import SideNav from "./components/SideNav";

gsap.registerPlugin(ScrollTrigger);

function Root() {
  const setCurrentSection = useNavStore((state) => state.setCurrentSection);

  // 새로고침 복원 - 렌더 직전
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const savedY = sessionStorage.getItem("lastScrollY");
    if (savedY && savedY !== "0") {
      window.scrollTo(0, parseInt(savedY, 10));
      sessionStorage.removeItem("lastScrollY");
    }
  }, []);

  // 새로고침 전 스크롤 위치 저장 + ScrollTrigger
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("lastScrollY", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", saveScroll);

    const mm = gsap.matchMedia();
    const triggers = [];

    mm.add("(max-width: 768px)", () => {
      document.querySelectorAll("section").forEach((section) => {
        const id = section.getAttribute("id");
        if (!id) return;

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          onEnter: () => setCurrentSection(id),
          onEnterBack: () => setCurrentSection(id),
        });

        triggers.push(trigger);
      });
    });

    mm.add("(min-width: 769px)", () => {
      document.querySelectorAll("section").forEach((section) => {
        const id = section.getAttribute("id");
        if (!id) return;

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentSection(id),
          onEnterBack: () => setCurrentSection(id),
        });

        triggers.push(trigger);
      });
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.removeEventListener("beforeunload", saveScroll);
      mm.revert();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [setCurrentSection]);

  return (
    <>
      <GlobalStyles />
      <SideNav />
      <Cover />
      <About />
      <Team />
      <Project />
      <Work />
      <Skills />
      <Process />
      <Contact />
    </>
  );
}

export default Root;
