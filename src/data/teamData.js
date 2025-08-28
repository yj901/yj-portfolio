// 팀 프로젝트
const teamData = [
  {
    id: "team-rookie",
    type: "팀",
    title: "ROOKie",
    date: "2025.04 ~ 2025.06",
    duration: "2개월",
    size: 6,
    position: "Frontend (HOME / TEAM HOME / Header, Footer UI)",
    summary:
      "KBO 하이라이트 기반 OTT+커머스 웹 서비스. 메인 홈, 팀 홈, 공통 UI를 담당하여 콘텐츠 → 커머스로 이어지는 흐름을 설계.",
    category: ["React", "JavaScript", "UI/UX"],
    thumbnail: "/images/thumb/rookie-thumb.jpg",
    fullDescription: `ROOKie는 KBO 야구 팬을 위한 하이라이트 큐레이션과 굿즈 커머스를 결합한 서비스입니다.
저는 메인 HOME, TEAM HOME(업커밍 매치/구단별 영상/인플루언서 존), 공통 UI(헤더/푸터/탑 스케줄)를 구현했습니다.
YouTube Data API와 React Query를 사용해 영상 데이터를 캐싱·표출하고, 팀/플레이리스트 기반으로 슬라이드 UI를 구성했습니다.`,
    features: [
      // HOME
      "HOME: 로그인 여부에 따라 MyhomeMainSlide / MainSlide 분기",
      "HOME: ShortsSlide, PlaySlidewithTabs, RankingTable, PopularPlayer, CollaboBanner 배치",
      // TEAM HOME
      "TEAM HOME: UpcomingMatch(경기 일정), 구단별 영상 섹션(영상 모아보기/팀 클립), InfluencerZone 구현",
      "TEAM HOME: InfluencerZone에서 인플루언서별 영상/프로필/연동 상품 UI 구성",
      // COMMON UI
      "Header: 메인 내비게이션, 팀 모드 토글, 모바일 메뉴/스토어 드롭다운, 검색창 UI/토글",
      "TopSchedule: KBO 일정 JSON 기반 3일 스케줄 박스 + 접힘/펼침",
      "Footer: 페이지별 테마 대응 및 반응형",
    ],
    techStack: [
      "React",
      "Vite",
      "React Router",
      "styled-components",
      "Zustand",
      "Swiper",
      "React Query (TanStack Query)",
      "YouTube Data API v3",
      "Axios",
    ],
    techDetails: [
      {
        name: "React",
        summary:
          "홈/팀홈/공통 UI를 컴포넌트 단위로 구조화, 상태 기반 조건 렌더링.",
        usedFor: ["HOME/TEAM HOME 섹션 컴포넌트", "Header/TopSchedule/Footer"],
      },
      {
        name: "React Router",
        summary: "팀 라우팅 및 경로별 UI 분기.",
        usedFor: ["useParams(teamCode) 기반 팀홈 렌더링", "내비게이션 라우트"],
      },
      {
        name: "styled-components",
        summary: "반응형/테마 토큰화, 컴포넌트 캡슐화.",
        usedFor: ["슬라이드 카드/배치 레이아웃", "Header/Footer 스타일"],
      },
      {
        name: "Zustand",
        summary: "헤더 높이/접힘·검색·팀모드 등 전역 UI 상태 관리.",
        usedFor: ["useHeaderStore", "useToggleStore", "useSearchStore"],
      },
      {
        name: "Swiper",
        summary: "영상/콘텐츠 슬라이드 구현 및 브레이크포인트 대응.",
        usedFor: ["메인/팀홈 영상 슬라이드"],
      },
      {
        name: "React Query",
        summary: "YouTube 플레이리스트/비디오 디테일 데이터 fetch & cache.",
        usedFor: [
          "useYoutubePlaylist",
          "useHighlightVideos",
          "useYoutubeVideoDetails",
        ],
      },
      {
        name: "YouTube Data API v3",
        summary: "하이라이트/팀 클립 등 영상 데이터 수집.",
        usedFor: ["플레이리스트/비디오 디테일 조회", "팀별 영상 섹션"],
      },
      {
        name: "Axios",
        summary: "YouTube API 호출 유틸.",
        usedFor: ["플레이리스트/비디오 디테일 요청"],
      },
    ],
    contributions: [
      {
        title: "HOME 페이지 구성",
        desc: "로그인 여부에 따른 메인 슬라이드 분기(MyhomeMainSlide/MainSlide)와 Shorts/Play 탭·랭킹/인기 선수/콜라보 배너 등 주요 섹션 배치.",
      },
      // TEAM HOME
      {
        title: "TEAM HOME – 경기/영상/인플루언서 섹션",
        desc: "UpcomingMatch(경기 일정)과 구단별 영상(PlaySlidewithTabs/ShortsSlide) 및 InfluencerZone(다중 렌더링 포함) 구현.",
      },
      {
        title: "InfluencerZone – 인플루언서 연동 UI",
        desc: "인플루언서 JSON 기반으로 프로필·영상·연동 상품을 조건부 렌더링하여 팀 페이지 내 팬 콘텐츠 허브 구성.",
      },
      // COMMON UI
      {
        title: "Header / TopSchedule / Footer",
        desc: "메인 내비·팀 모드 토글·모바일 메뉴/스토어 드롭다운·검색창 UI/토글 구현. 실제 검색 로직은 제외. KBO 일정 JSON 연동 TopSchedule 접힘/펼침, Footer 테마 대응.",
      },
      // API/Hooks
      {
        title: "YouTube API + React Query 연동",
        desc: "플레이리스트/비디오 디테일 훅 작성·개선 및 캐싱/재요청 방지 설정으로 영상 섹션의 응답성 개선(협업/GPT 참고 기반).",
      },
    ],
    troubleshooting: [
      {
        title: "",
        desc: "",
      },
    ],
    improvements: [
      {
        title: "",
        desc: "",
      },
    ],
    imageList: [
      "/images/details/rookie-detail1.jpg",
      "/images/details/rookie-detail2.jpg",
    ],
    github: "https://github.com/dayekimm0/Rookie",
    link: "https://rookie-dd013.firebaseapp.com/",
    videoUrl: null,
  },
  {
    id: "team-kuora",
    type: "팀",
    title: "KUORA",
    date: "2025.03",
    duration: "1개월",
    size: 5,
    position: "",
    summary: "",
    category: ["JavaScript"],
    thumbnail: "/images/thumb/kuora-thumb.jpg",
    fullDescription: `
    `,
    features: ["메인 홈: 메인슬라이더, 추천 아티스트, 차트 미리보기, 매거진"],
    techStack: ["JavaScript", "SCSS", "HTML"],
    techDetails: [
      {
        name: "JavaScript",
        summary: `
        `,
        usedFor: [],
      },
    ],
    contributions: [
      {
        title: "",
        desc: "",
      },
    ],
    troubleshooting: [],
    improvements: [],
    imageList: [
      "/images/details/kuora-detail1.jpg",
      "/images/details/kuora-detail2.jpg",
    ],
    github: "https://github.com/yj901/commerce-project-kuora",
    link: "https://kuora-all.netlify.app/",
    videoUrl: null,
  },
  {
    id: "team-kpop",
    type: "팀",
    title: "Metaphor",
    date: "2025.02",
    duration: "1개월",
    size: 4,
    position: "헤더 및 차트 페이지 담당",
    summary:
      "K-POP 팬덤을 위한 뮤직 플랫폼입니다. 메인/아티스트/차트/매거진/로그인·회원가입 페이지로 구성되며, 다양한 콘텐츠와 직관적인 UI로 아티스트 활동을 쉽고 재미있게 즐길 수 있도록 설계하였습니다.",
    category: ["JavaScript"],
    thumbnail: "/images/thumb/metaphor-thumb.jpg",
    fullDescription: `메타포는 K-pop 팬덤 문화를 하나의 공간에서 즐길 수 있도록 제작한 팀 프로젝트 웹사이트입니다. 플랫폼 타겟은 놀이하듯 팬덤 문화를 즐기는 MZ세대로, 아티스트 정보, 영상, 음악 차트, 매거진, 댓글과 좋아요 기능 등 팬덤 활동을 집약한 플랫폼을 지향했습니다. 
이 프로젝트는 컨셉 기획부터 UI 디자인, 퍼블리싱, 배포까지 전 과정을 팀원들과 협업하여 진행하였습니다. 
저는 전체 공통 레이아웃인 헤더 영역을 구현했으며, 차트 페이지의 기획 및 개발을 담당했습니다.
    `,
    features: [
      "메인 홈: 메인슬라이더, 추천 아티스트, 차트 미리보기, 매거진",
      "아티스트: 아티스트 소개, 멤버 프로필, 공식 영상 및 팬톡",
      "뮤직 차트: TOP10/주간/월간별 곡 리스트, 좋아요, 오디오 재생",
      "매거진: 카드 리스트 및 페이지네이션",
      "회원가입/로그인: LocalStorage 기반의 간단 로그인 기능",
      "마이페이지: 사용자 정보 표시 및 로그아웃 기능",
    ],
    techStack: ["JavaScript", "SCSS", "HTML"],
    techDetails: [
      {
        name: "JavaScript",
        summary: `
웹사이트의 주요 동적 기능을 JavaScript로 구현했습니다. 차트 페이지에서 곡 불러오기·재생·좋아요 토글을 처리했으며, 공통 header 영역의 스크롤 이벤트, 모바일 메뉴 토글, 검색창 열림/닫힘 기능 등을 작성했습니다.
        `,
        usedFor: [
          "차트 데이터 병렬 로딩 및 렌더링",
          "탭 전환(Top10/주간/월간) 상태 관리",
          "오디오 단일 재생 제어 및 종료 처리",
          "공통 헤더의 메뉴 토글 및 스크롤 이벤트 처리",
        ],
      },
      {
        name: "SCSS",
        summary: `
반응형 웹을 위해 SCSS로 공통 스타일과 레이아웃을 관리했습니다. 
변수와 믹스를 활용하여 해상도별 반응형 처리를 체계적으로 적용하였으며, 
공통 요소(헤더, 푸터, 버튼 등)의 스타일을 재사용 가능하게 구조화했습니다.
        `,
        usedFor: [
          "반응형 레이아웃 구성",
          "공통 컴포넌트 스타일 재사용",
          "가독성 높은 SCSS 모듈 구조 관리",
        ],
      },
      {
        name: "jQuery Slick",
        summary:
          "메인/콘텐츠 영역의 슬라이드를 손쉽게 구성하기 위해 Slick 플러그인을 사용하였습니다.",
        usedFor: ["배너/콘텐츠 슬라이더"],
      },
      {
        name: "LocalStorage",
        summary:
          "실제 서버 없이 로그인/회원가입 상태를 로컬 스토리지로 관리하였습니다.",
        usedFor: ["세션 대체 로그인 상태 유지"],
      },
      {
        name: "Firebase",
        summary: `
Firebase Hosting으로 정적 자산을 배포했습니다. 
개발 브랜치(dev)에서 검증 후 main 병합 시 배포하는 흐름을 사용했습니다.
        `,
        usedFor: [
          "초기 배포 및 정적 호스팅",
          "브랜치 병합 기반 배포 파이프라인",
        ],
      },
    ],
    contributions: [
      {
        title: "차트 데이터 수집·렌더링",
        desc: "TOP10, 주간, 월간 차트 데이터를 동시에 불러오고, 이를 공통 함수로 처리하여 효율적으로 목록을 생성하고 화면에 출력했습니다.",
      },
      {
        title: "뮤직 차트 페이지 구현",
        desc: "차트 페이지의 전반적인 구조와 탭 전환 방식을 설계하고, 탭 클릭 시 해당 카테고리의 차트가 새롭게 갱신되도록 구현했습니다. 또한 한 번에 하나의 곡만 재생되도록 오디오를 제어하는 로직을 적용해 사용자 경험을 개선했습니다.",
      },
      {
        title: "공통 헤더 제작",
        desc: "스크롤 방향에 따라 헤더가 숨겨지고 다시 나타나는 인터랙션을 추가하여 사용자 경험을 개선하였으며, 모바일 환경에서는 햄버거 메뉴와 검색창 토글 기능을 구현했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "사후 보완: 페이지네이션",
        desc: "발표날 리스트가 너무 길어서 로딩 및 스크롤이 길어진다는 평가가 있었습니다. 따라서 아티스트 및 매거진 페이지에 콘텐츠 양에 맞춰 페이지 번호가 자동 생성되도록 하고, 이전/다음 버튼으로 손쉽게 이동할 수 있도록 페이지네이션 기능을 구현했습니다.",
      },
    ],
    improvements: [
      {
        title: "검색 필터 지원",
        desc: "검색 필터 기능이 아직 지원되지 않습니다. 추후 검색했을 때 해당 아티스트가 뜨도록 개선할 계획입니다.",
      },
    ],
    imageList: [
      "/images/details/metaphor-detail1.jpg",
      "/images/details/metaphor-detail2.jpg",
      "/images/details/metaphor-detail3.jpg",
    ],
    github: "https://github.com/submaestro/metaphor",
    link: "https://metaphor-8079a.web.app/",
    videoUrl: null,
  },
];
export default teamData;
