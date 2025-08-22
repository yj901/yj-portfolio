//  개인 프로젝트
const projectData = [
  {
    id: "todo",
    type: "개인",
    title: "투두리스트",
    date: "2025.04",
    duration: "1주",
    summary:
      "할 일을 작성하고 관리할 수 있는 간단한 일정 관리 앱으로, Todo 작성/삭제, 완료 체크, 검색, 다크모드를 지원합니다.",
    category: ["React", "JavaScript"],
    tags: ["React", "JavaScript", "Redux"],
    thumbnail: "/images/thumb/todo-thumb.jpg",
    fullDescription: `할 일을 가볍게 기록·관리하는 투두리스트입니다.
작성·삭제·완료 체크와 함께, 총 개수·완료/미완료 통계를 즉시 제공합니다.
검색과 다크모드를 지원해 어떤 환경에서도 빠르게 찾아보고 관리할 수 있습니다.`,
    features: [
      "todo 작성 및 삭제",
      "완료된 todo는 체크 표시",
      "현재 있는 todo의 총 개수와 체크 완료 및 미완료 수 확인",
      "검색기능 지원",
      "다크모드 지원",
    ],
    techStack: ["React", "JavaScript", "Redux"],
    techDetails: [
      {
        name: "React",
        summary:
          "컴포넌트 구조로 입력/리스트/통계 영역을 분리하고 상태 변화에 맞춰 최소 렌더링.",
        usedFor: ["TodoForm", "TodoList", "StatsBadge"],
      },
      {
        name: "JavaScript",
        summary:
          "불변성 기반으로 목록 추가/삭제/토글 로직 구현, filter/map으로 검색·집계 처리.",
        usedFor: ["추가·삭제·토글 로직", "검색 필터", "통계 계산"],
      },
      {
        name: "Redux",
        summary:
          "전역 상태로 todos·필터·테마를 일관 관리하여 컴포넌트 간 데이터 흐름 단순화.",
        usedFor: ["todos 상태", "filter(keyword, status)", "theme 다크모드"],
      },
      {
        name: "styled-components",
        summary:
          "CSS-in-JS로 다크/라이트 테마 토글, 컴포넌트 단위 스타일 캡슐화.",
        usedFor: ["테마 토글", "컴포넌트 스타일"],
      },
      {
        name: "LocalStorage",
        summary: "새로고침 이후에도 목록/테마 유지(영속성).",
        usedFor: ["초기 로드·저장 미들웨어"],
      },
    ],
    imageList: [
      "/images/details/todo-detail1.jpg",
      "/images/details/todo-detail2.jpg",
    ],
    troubleshooting: [
      {
        title: "API 응답 지연 문제",
        desc: "OpenWeatherMap API 호출 시 응답 속도가 느려 사용자 경험이 저하되는 문제가 발생했습니다. 로딩 상태 UI를 추가하고, 요청 횟수를 줄이기 위해 캐싱 로직을 적용했습니다.",
      },
      {
        title: "반응형 깨짐",
        desc: "모바일 화면에서 날씨 카드가 겹치는 이슈가 있었고, Tailwind의 grid-auto-flow를 적용해 문제를 해결했습니다.",
      },
    ],
    github: "https://github.com/yj901/todo-list",
    link: "https://my-todolist-check.netlify.app/",
    videoUrl: null,
  },
  {
    id: "project-weather",
    type: "개인",
    title: "오늘의 날씨",
    date: "2024.05",
    duration: "2주",
    summary: "Weather Map API 기반 실시간 날씨 + 옷차림 추천 사이트",
    category: ["JavaScript"],
    tags: ["API", "JavaScript", "Tailwind"],
    thumbnail: "/images/thumb/weather-thumb.jpg",
    fullDescription: `사용자의 위치를 기반으로 실시간 날씨 정보와 현재 날씨에 맞는 옷차림을 추천합니다.`,
    features: [
      "3시간 간격 예보 기반 옷 추천",
      "위치기반 기온 최고/최저 온도 표시",
      "날씨에 맞는 아이콘 및 계절별 배경 적용",
      "반응형 UI 구현",
    ],
    techStack: ["JavaScript", "TailwindCSS", "OpenWeatherMap API"],
    techDetails: [
      {
        name: "React",
        summary:
          "컴포넌트 구조로 입력/리스트/통계 영역을 분리하고 상태 변화에 맞춰 최소 렌더링.",
        usedFor: ["TodoForm", "TodoList", "StatsBadge"],
      },
      {
        name: "JavaScript",
        summary:
          "불변성 기반으로 목록 추가/삭제/토글 로직 구현, filter/map으로 검색·집계 처리.",
        usedFor: ["추가·삭제·토글 로직", "검색 필터", "통계 계산"],
      },
      {
        name: "Redux",
        summary:
          "전역 상태로 todos·필터·테마를 일관 관리하여 컴포넌트 간 데이터 흐름 단순화.",
        usedFor: ["todos 상태", "filter(keyword, status)", "theme 다크모드"],
      },
      {
        name: "styled-components",
        summary:
          "CSS-in-JS로 다크/라이트 테마 토글, 컴포넌트 단위 스타일 캡슐화.",
        usedFor: ["테마 토글", "컴포넌트 스타일"],
      },
      {
        name: "LocalStorage",
        summary: "새로고침 이후에도 목록/테마 유지(영속성).",
        usedFor: ["초기 로드·저장 미들웨어"],
      },
    ],
    imageList: [
      "/images/details/weather-detail1.jpg",
      "/images/details/weather-detail2.jpg",
      // "/images/details/weather-detail1.jpg",
    ],
    github: "https://github.com/yj901/weather-recommend-clothes",
    link: "https://weather-recommendation.netlify.app/",
    videoUrl: null,
  },

  {
    id: "weather3",
    type: "개인",
    title: "오늘의 날씨3",
    summary: "Weather Map API 기반 실시간 날씨 + 옷차림 추천 사이트",
    category: ["HTML/CSS"],
    tags: ["API", "JavaScript", "Tailwind", "Tailwind"],
    thumbnail: "/images/thumb/weather-thumb.jpg",

    fullDescription: `사용자의 위치를 기반으로 실시간 날씨 정보와 현재 날씨에 맞는 옷차림을 추천합니다.`,
    techStack: ["JavaScript", "TailwindCSS", "OpenWeatherMap API"],
    features: [
      "3시간 간격 예보 기반 옷 추천",
      "위치기반 기온 최고/최저 온도 표시",
      "날씨에 맞는 아이콘 및 계절별 배경 적용",
      "반응형 UI 구현",
    ],
    imageList: ["/images/details/weather-detail1.jpg"],
    github: "https://github.com/yj901/weather-recommend-clothes",
    link: "https://weather-recommendation.netlify.app/",
    videoUrl: null,
  },
];
export default projectData;
