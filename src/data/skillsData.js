const skillsData = [
  {
    category: "Frontend",
    skill: "React",
    desc: "컴포넌트 기반 구조로 화면을 구성하고, hooks와 Router를 활용한 SPA 개발 경험이 있습니다.",
    icon: "react",
    tags: ["Hooks", "SPA", "React Router"],
  },
  {
    category: "Frontend",
    skill: "Redux",
    desc: "전역 상태 관리를 위해 사용했으며, 미들웨어를 통해 액션 흐름을 제어한 경험이 있습니다.",
    icon: "redux",
    tags: ["State Management", "Async"],
  },
  {
    category: "Frontend",
    skill: "Zustand",
    desc: "경량 상태 관리 라이브러리로, 전역 상태를 간단하고 직관적으로 관리한 경험이 있습니다.",
    icon: "zustand",
    tags: ["State Management", "Store"],
  },
  {
    category: "Frontend",
    skill: "React Query",
    desc: "외부 API 데이터를 비동기적으로 요청하고, 로딩·에러 처리와 캐싱을 통해 서버 상태를 효율적으로 관리한 경험이 있습니다.",
    icon: "reactquery",
    tags: ["Server State", "Fetching", "Caching"],
  },
  {
    category: "Frontend",
    skill: "SCSS",
    desc: "변수와 믹스인을 활용해 재사용 가능한 스타일링을 구성하고 반응형 레이아웃을 구현했습니다.",
    icon: "scss",
    tags: ["Variables", "Mixins", "Responsive"],
  },
  {
    category: "Frontend",
    skill: "styled-components",
    desc: "컴포넌트 단위 스타일링과 props 기반 동적 스타일링을 적용했습니다.",
    icon: "styled",
    tags: ["Dynamic Styling", "Theme", "CSS-in-JS"],
  },
  {
    category: "Frontend",
    skill: "Tailwind CSS",
    desc: "유틸리티 클래스 기반으로 빠르게 반응형 UI를 제작했습니다.",
    icon: "tailwind",
    tags: ["Utility-first", "Responsive"],
  },
  {
    category: "Frontend",
    skill: "GSAP",
    desc: "ScrollTrigger를 활용해 스크롤 위치에 따른 인터랙티브 애니메이션을 구현한 경험이 있습니다.",
    icon: "gsap",
    tags: ["ScrollTrigger", "Animation"],
  },
  {
    category: "Frontend",
    skill: "Framer Motion",
    desc: "React 환경에서 컴포넌트 단위 애니메이션을 구현하고, 모션 효과로 UI 인터랙션을 강화한 경험이 있습니다.",
    icon: "framermotion",
    tags: ["Animation", "Interaction", "UI Motion"],
  },

  //Language
  {
    category: "Language",
    skill: "JavaScript",
    desc: "ES6+ 문법을 활용해 다양한 기능을 구현할 수 있으며, 비동기 처리를 할 수 있습니다.",
    icon: "javascript",
    tags: ["ES6+", "Async/Await", "DOM"],
  },
  {
    category: "Language",
    skill: "TypeScript",
    desc: "타입 선언, 인터페이스, 제네릭 등 주요 문법을 이해하고 있으며, 정적 타입 시스템을 활용한 코드 작성 경험이 있습니다.",
    icon: "typescript",
    tags: ["Typing", "Interface", "Generic"],
  },
  {
    category: "Language",
    skill: "CSS",
    desc: "Flex/Grid를 활용한 반응형 레이아웃 구성과 애니메이션을 통한 인터랙션 구현 경험이 있습니다.",
    icon: "css",
    tags: ["Flex", "Grid", "Responsive"],
  },

  {
    category: "Language",
    skill: "HTML",
    desc: "시멘틱 태그를 활용해 구조화된 마크업을 작성하고, 웹 접근성과 SEO를 고려한 페이지 구현 경험이 있습니다.",
    icon: "html",
    tags: ["Semantic", "SEO"],
  },

  //tools
  {
    category: "Tools",
    skill: "GitHub",
    desc: "브랜치 전략을 활용한 협업과 충돌 해결 경험이 있으며, Pull Request 기반 협업 프로세스를 적용했습니다.",
    icon: "githubIcon",
    tags: ["Branch", "PR", "Merge"],
  },
  {
    category: "Tools",
    skill: "Netlify",
    desc: "React 프로젝트를 Netlify로 배포하고, 환경 변수 설정과 SPA 라우팅을 적용한 경험이 있습니다.",
    icon: "netlify",
    tags: ["Deployment", "Environment", "Routing"],
  },
  {
    category: "Tools",
    skill: "Firebase",
    desc: "Firebase Hosting을 활용해 프로젝트를 배포한 경험이 있습니다.",
    icon: "firebase",
    tags: ["Hosting", "Deployment"],
  },

  //design
  {
    category: "Design",
    skill: "Figma",
    desc: "UI 시안 제작과 프로토타입 공유, 컬러 팔레트와 폰트 규칙을 정리한 디자인 가이드 작성 경험이 있습니다.",
    icon: "figma",
    tags: ["Prototype", "Collaboration", "UI Design"],
  },
  {
    category: "Design",
    skill: "Photoshop",
    desc: "이미지 보정과 합성, 배너 및 시각 자료 제작에 활용한 경험이 있습니다.",
    icon: "photoshop",
    tags: ["Image Editing", "Banner Design", "Retouching"],
  },
  {
    category: "Design",
    skill: "Illustrator",
    desc: "아이콘, 로고, 벡터 그래픽 제작에 활용한 경험이 있습니다.",
    icon: "illustrator",
    tags: ["Vector", "Logo", "Icon Design"],
  },
];
export default skillsData;
