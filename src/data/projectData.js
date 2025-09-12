//  개인 프로젝트
const projectData = [
  {
    id: "project-cinema",
    type: "개인",
    title: "시네마스코프",
    date: "2025.09",
    duration: "1주",
    summary:
      "TMDB API를 연동해 영화와 TV 프로그램 정보를 검색하고 탐색할 수 있는 웹 애플리케이션입니다.",
    category: ["React", "TypeScript"],
    tags: ["Next.js", "TypeScript", "Tailwind"],
    thumbnail: "/images/thumb/cinema-thumb.jpg",
    fullDescription: `영화와 TV 프로그램 정보를 탐색할 수 있는 웹 애플리케이션입니다.  
TMDB API에서 데이터를 가져와 최신 영화, 인기 영화, TV 시리즈 등을 보여주며 검색 기능을 통해 원하는 콘텐츠를 쉽게 찾을 수 있습니다.  
Next.js App Router 기반으로 라우팅을 구성했고 클라이언트/서버 컴포넌트 구분, React Query 상태 관리, 아토믹 디자인 구조를 적용했습니다.`,
    features: [
      "메인 페이지에서 최신/인기 영화와 TV 프로그램 섹션 출력",
      "검색 기능으로 영화/TV 콘텐츠 탐색",
      "상세 페이지에서 작품 정보 확인",
      "페이지네이션을 통한 데이터 탐색",
      "반응형 UI",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "React Query"],
    techDetails: [
      {
        name: "Next.js",
        summary:
          "App Router 기반 라우팅을 적용하고, 서버와 클라이언트 컴포넌트를 구분하여 화면을 구성했습니다.",
        usedFor: ["라우팅 구조", "페이지/레이아웃 구성"],
      },
      {
        name: "TypeScript",
        summary:
          "API 응답 타입과 컴포넌트 props 타입을 정의하여 런타임 오류를 줄이고 안정적인 코드 작성이 가능하도록 했습니다.",
        usedFor: ["API 타입 정의", "컴포넌트 props 타입 관리"],
      },
      {
        name: "React",
        summary:
          "컴포넌트 구조를 활용해 섹션별 UI를 분리하고 상태 변화에 따라 필요한 부분만 렌더링하도록 구성했습니다.",
        usedFor: [
          "레이아웃과 UI 컴포넌트 분리",
          "상태 기반 조건부 렌더링",
          "재사용 가능한 UI 구성",
        ],
      },
      {
        name: "React Query",
        summary:
          "TMDB API와 연결해 서버 데이터를 가져오고 캐싱을 통해 동일한 요청을 최소화했습니다.",
        usedFor: ["데이터 패칭", "캐싱", "로딩/에러 상태 관리"],
      },
      {
        name: "Tailwind CSS",
        summary:
          "유틸리티 클래스를 활용해 빠르게 UI 스타일링을 구성했으며 반응형 디자인을 적용했습니다.",
        usedFor: ["UI 스타일링", "반응형 대응"],
      },
      {
        name: "Atomic Design",
        summary:
          "Atoms, Molecules, Organisms 단위로 컴포넌트를 구조화하여 재사용성과 유지보수성을 높였습니다.",
        usedFor: ["컴포넌트 설계", "폴더 구조 관리"],
      },
    ],
    imageList: [
      "/images/details/cinema-detail1.jpg",
      "/images/details/cinema-detail2.jpg",
      "/images/details/cinema-detail3.jpg",
    ],
    // troubleshooting: [
    //   {
    //     title: "",
    //     desc: "",
    //   },
    // ],
    improvements: [
      {
        title: "Next.js 활용 확장",
        desc: "Next.js로 처음 진행한 프로젝트라 완성 후 돌아보니 Next.js의 고유 기능(SSR/SSG 등)을 충분히 활용하지 못하고 CSR 중심으로 제작하게 된 점이 아쉬웠습니다. 향후에는 현재 UI를 유지하면서 SSR 구조로 확장해 초기 로딩 속도와 SEO를 강화해보고 싶습니다.",
      },
    ],
    github: "https://github.com/yj901/cinema-scope",
    link: "https://cinema-scope-beryl.vercel.app/",
    videoUrl: null,
  },
  {
    id: "project-todo",
    type: "개인",
    title: "투두리스트",
    date: "2025.04",
    duration: "1주",
    summary:
      "할 일을 작성하고 관리할 수 있는 간단한 일정 관리 앱으로, Todo 작성/삭제, 완료 체크, 검색, 다크모드를 지원합니다.",
    category: ["React", "JavaScript"],
    tags: ["React", "JavaScript", "Redux"],
    thumbnail: "/images/thumb/todo-thumb.jpg",
    fullDescription: `할 일을 간단하게 기록하고 관리할 수 있는 투두리스트입니다.  
작성·삭제·완료 체크와 함께 총 개수와 완료/미완료 통계를 즉시 확인할 수 있습니다.  
검색과 다크모드를 지원하여 다양한 환경에서도 편리하게 사용할 수 있습니다.`,
    features: [
      "Todo 작성/삭제",
      "Todo 완료 체크",
      "현재 있는 Todo의 총 개수와 체크 완료 및 미완료 수 확인",
      "검색기능 지원",
      "다크모드 지원",
    ],
    techStack: ["React", "JavaScript", "Redux"],
    techDetails: [
      {
        name: "React",
        summary:
          "컴포넌트 구조로 입력/리스트/통계 영역을 분리하고, 상태 변화에 맞춰 필요한 부분만 리렌더링되도록 구성했습니다.",
        usedFor: ["TodoForm", "TodoList"],
      },
      {
        name: "JavaScript",
        summary:
          "map, filter 같은 배열 메소드로 todo 추가·삭제·체크, 검색, 완료/미완료 집계를 구현했습니다. 또한 Date 객체로 오늘 날짜와 요일을 표시했습니다.",
        usedFor: [
          "todo 추가·삭제·체크 로직",
          "검색 필터링",
          "완료/미완료 개수 계산",
          "날짜/요일 표시",
        ],
      },
      {
        name: "Redux",
        summary:
          "할 일 목록(todoList), 검색어(searchTxt), 테마 상태(mode)를 전역 상태로 관리하여 컴포넌트 간 데이터 흐름을 단순화했습니다.",
        usedFor: [
          "TodoList 검색 필터링",
          "TodoItem 완료 체크/삭제",
          "ThemeBtn 다크/라이트 모드 전환",
        ],
      },
      {
        name: "styled-components",
        summary:
          "CSS 변수와 Redux 상태를 결합해 다크/라이트 테마를 전역에서 관리했습니다. html 요소에 dark 클래스를 토글하면 CSS 변수가 한 번에 교체되어, 컴포넌트 단위에서도 일관된 테마 스타일을 적용할 수 있도록 구현했습니다.",
        usedFor: ["다크/라이트 모드 전환", "컴포넌트 스타일"],
      },
      {
        name: "LocalStorage",
        summary:
          "스토어 초기 상태(preloadedState)로 불러오고, 상태 변경 시 데이터를 저장하여 새로고침 후에도 todo 목록과 테마 모드가 유지되도록 했습니다.",
        usedFor: ["초기 상태 복원", "데이터 지속 저장"],
      },
    ],
    imageList: [
      "/images/details/todo-detail1.jpg",
      "/images/details/todo-detail2.jpg",
    ],
    troubleshooting: [
      {
        title: "아이콘 자동번역 문제",
        desc: "Material Icons 사용 시, 자동 번역 기능이 'sunny' 같은 문자열을 번역해버려 아이콘이 표시되지 않는 문제가 발생했습니다. 이를 lucide-react 아이콘으로 교체하여 해결했습니다.",
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
    date: "2025.05",
    duration: "2주",
    summary:
      "오늘/주간 예보, 3시간 단위 기온 그래프, 기온대별 옷 추천을 제공하는 바닐라 JS 웹앱입니다.",
    category: ["JavaScript"],
    tags: ["JavaScript", "Tailwind", "Chart.js"],
    thumbnail: "/images/thumb/weather-thumb.jpg",
    fullDescription: `현재 위치 기준으로 오늘/주간 날씨와 3시간 기온 변화를 한 화면에서 확인할 수 있습니다.
기온 범위(JSON)와 매칭해 옷 추천을 보여주며, Tailwind 유틸리티와 글라스 스타일로 가벼운 UI를 구성했습니다.`,
    features: [
      "현재 위치 기반 오늘/주간 날씨 표시",
      "3시간 단위 기온 라인 차트 (Chart.js)",
      "최고 기온(JSON) 기반 옷 추천",
      "현재 지역명 표시 (kakao services)",
      "계절별 배경 전환",
      "반응형 UI (Tailwind)",
      "PWA 설치 지원 (manifest + service worker 등록)",
    ],
    techStack: ["JavaScript", "Tailwind", "Chart.js"],
    techDetails: [
      {
        name: "JavaScript",
        summary:
          "OpenWeatherMap API 응답을 fetch/async-await으로 가져와 데이터를 가공한 뒤 DOM에 렌더링하였습니다. 최고 기온은 JSON 데이터와 매칭하여 옷차림을 추천하도록 구현하였습니다.",
        usedFor: ["날씨 데이터 처리", "의상 추천", "계절 배경 전환"],
      },
      {
        name: "OpenWeatherMap API",
        summary:
          "현재 날씨와 5일·3시간 단위 예보 데이터를 활용하였습니다. 응답 내 날씨 코드(01d, 02n 등)를 아이콘 및 옷 추천 로직과 연계하였습니다.",
        usedFor: ["현재 기온·날씨", "주간 예보", "아이콘 매핑"],
      },
      {
        name: "Tailwind CSS",
        summary:
          "유틸리티 클래스를 활용하여 반응형 레이아웃을 구성하였습니다. 전역 .glass-box 스타일을 적용하여 글라스모피즘 효과를 구현하였습니다.",
        usedFor: ["반응형 UI", "글라스 스타일"],
      },
      {
        name: "Chart.js",
        summary:
          "3시간 단위 기온을 라인 차트로 시각화하였습니다. 그라디언트 배경과 datalabels 플러그인을 사용하여 값의 가독성을 높였습니다.",
        usedFor: ["시간대별 기온 차트"],
      },
      {
        name: "Kakao Maps API (Geocoder)",
        summary:
          "카카오 지도 API의 Geocoder를 이용하여 위도/경도를 행정구역명으로 변환하였습니다. 이를 통해 사용자의 현재 지역명을 화면에 표시하였습니다.",
        usedFor: ["현재 지역명 출력"],
      },
    ],
    imageList: [
      "/images/details/weather-detail1.jpg",
      "/images/details/weather-detail3.jpg",
      "/images/details/weather-detail4.jpg",
    ],
    troubleshooting: [
      {
        title: "UI 가독성 문제",
        desc: "배경이 반투명이고 텍스트가 흰색이라 타이틀(예: '시간별 기온')이 잘 보이지 않았습니다. 피드백을 반영해 글자 두께를 굵게 수정하여 가독성을 개선했습니다.",
      },
    ],
    improvements: [
      {
        title: "해외 위치 표시 지원",
        desc: "카카오 지도 API는 국내 지역만 매핑 가능하여 해외 사용자는 위치명이 표시되지 않습니다. 추후 OpenWeatherMap의 도시명 데이터를 활용해 해외 지역도 표시할 수 있도록 개선할 계획입니다.",
      },
    ],
    github: "https://github.com/yj901/weather-recommend-clothes",
    link: "https://weather-recommendation.netlify.app/",
    videoUrl: null,
  },

  {
    id: "project-music",
    type: "개인",
    title: "OST 뮤직 플레이어",
    date: "2025.03",
    duration: "1주",
    summary:
      "영화 OST 8곡을 수록한 바닐라 JS 기반 커스텀 뮤직 플레이어입니다. 오디오 재생/정지/로드, 프로그레스바 제어, 레코드판 회전 애니메이션을 구현하였습니다.",
    category: ["JavaScript"],
    tags: ["JavaScript", "SCSS"],
    thumbnail: "/images/thumb/music-thumb.jpg",
    fullDescription: `Vanilla JS로 제작한 커스텀 뮤직 플레이어입니다. 
음악 DB(JSON)를 불러와 동적으로 리스트와 플레이어를 생성하고, 
오디오 API와 DOM 제어를 통해 재생/정지/위치 이동/반복 기능을 구현하였습니다. 
또한 transform과 transition을 활용해 레코드판 회전, 플레이어 회전 등 인터랙션을 추가하였습니다.`,
    features: [
      "JSON 데이터 기반 동적 플레이어 생성",
      "재생/정지/로드 기능",
      "프로그레스바 클릭으로 구간 이동",
      "곡 종료 시 자동 상태 초기화",
      "이전/다음 버튼으로 앨범 전환",
      "모달 앨범 리스트 선택 기능",
      "레코드판 회전 애니메이션",
      "SCSS 변수와 그라디언트를 활용한 스타일링",
    ],
    techStack: ["JavaScript", "SCSS"],
    techDetails: [
      {
        name: "JavaScript",
        summary:
          "fetch로 JSON DB를 불러와 DOM에 동적으로 플레이어와 모달 리스트를 생성하였습니다. 오디오 API를 통해 재생/정지/로드, 프로그레스바 제어, 곡 위치 이동을 구현하였습니다.",
        usedFor: ["동적 데이터 렌더링", "오디오 제어", "프로그레스바 이벤트"],
      },
      {
        name: "DOM 조작",
        summary:
          "transform과 transition을 활용해 플레이어 회전, 레코드판 회전 등 시각적 인터랙션을 구현하였습니다.",
        usedFor: ["플레이어 로테이션", "앨범 전환 애니메이션"],
      },
      {
        name: "SCSS",
        summary:
          "색상, 그라디언트, 그림자 값을 변수화하여 유지보수를 쉽게 하고, 부분 반응형 스타일을 적용하였습니다.",
        usedFor: ["스타일 변수 관리", "그라디언트/섀도우 스타일"],
      },
    ],
    imageList: [
      "/images/details/music-detail1.jpg",
      "/images/details/music-detail2.jpg",
      "/images/details/music-detail3.jpg",
    ],
    troubleshooting: [],
    improvements: [],
    github: "https://github.com/yj901/music-player-custom",
    link: "https://ost-playlist.netlify.app/",
    videoUrl: null,
  },
];
export default projectData;
