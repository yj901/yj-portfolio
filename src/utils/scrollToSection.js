import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import lenis from "./lenis";

gsap.registerPlugin(ScrollTrigger);

export const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  // ScrollTrigger refresh로 최신 위치 정보 업데이트
  ScrollTrigger.refresh();

  const allTriggers = ScrollTrigger.getAll();

  // 핀 섹션 트리거를 id로 찾기
  const pinTrigger = allTriggers.find(
    (trigger) =>
      trigger.trigger?.getAttribute?.("id") === id && trigger.pin === true
  );

  // 일반 트리거도 id로 찾기
  const sectionTrigger = allTriggers.find(
    (trigger) => trigger.trigger?.getAttribute?.("id") === id
  );

  let scrollPosition;

  if (pinTrigger) {
    // 핀이 설정된 섹션: start 위치 사용
    scrollPosition = pinTrigger.start;
  } else if (sectionTrigger) {
    // 일반 섹션이지만 특별 처리가 필요한 경우들
    if (id === "contact") {
      // Contact는 이전 핀 섹션(Process)의 end 위치에서 시작
      const processTrigger = allTriggers.find(
        (trigger) =>
          trigger.trigger?.getAttribute?.("id") === "process" &&
          trigger.pin === true
      );

      if (processTrigger) {
        scrollPosition = processTrigger.end;
      } else {
        // Process 핀 트리거가 없으면 섹션의 실제 위치 계산
        const rect = target.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        scrollPosition = rect.top + scrollTop;
      }
    } else if (id === "skills") {
      // Skills는 이전 핀 섹션(Work)의 end 위치에서 시작
      const workTrigger = allTriggers.find(
        (trigger) =>
          trigger.trigger?.getAttribute?.("id") === "work" &&
          trigger.pin === true
      );

      if (workTrigger) {
        scrollPosition = workTrigger.end;
      } else {
        // Work 핀 트리거가 없으면 섹션의 실제 위치 계산
        const rect = target.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        scrollPosition = rect.top + scrollTop;
      }
    } else {
      // 다른 일반 섹션들
      scrollPosition = sectionTrigger.start;
    }
  } else {
    // ScrollTrigger가 없는 섹션: 직접 계산
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollPosition = rect.top + scrollTop;
  }

  lenis.scrollTo(scrollPosition, {
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
};
