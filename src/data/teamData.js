// 팀 프로젝트
const teamData = [
  {
    id: "team-rookie",
    type: "팀",
    title: "ROOKie",
    date: "2025.04 ~ 2025.06",
    duration: "2개월",
    size: 6,
    position: "Frontend (HOME / TEAM HOME / Header · Footer)",
    summary:
      "ROOKie는 KBO 야구 팬을 위한 하이라이트 영상 큐레이션과 굿즈 커머스를 결합한 OTT커머스 웹 서비스입니다. 팬들이 원하는 순간의 영상을 빠르게 즐기고 관련 굿즈로 자연스럽게 이어지는 경험을 제공하는 것을 목표로 했습니다.",
    category: ["React", "JavaScript", "UI/UX"],
    thumbnail: "/images/thumb/rookie-thumb.jpg",
    fullDescription: `ROOKie는 KBO 야구 팬을 위한 하이라이트 영상 큐레이션과 굿즈 커머스를 결합한 웹 서비스입니다. 팬들이 원하는 순간의 영상을 빠르게 즐기고 관련 굿즈로 자연스럽게 이어지는 경험을 제공하는 것을 목표로 했습니다.  
저는 메인 HOME 페이지와 TEAM HOME(업커밍 매치, 구단별 영상, 인플루언서 존), 공통 UI(Header, Footer, TopSchedule)를 구현했습니다. 또한 YouTube Data API와 React Query를 활용해 영상 데이터를 캐싱·표출하고, 팀별/플레이리스트 기반으로 슬라이드 UI를 구성했습니다.
`,
    features: [
      "HOME: 로그인/비로그인 분기, 리그 순위·인기 굿즈 큐레이션",
      "TEAM HOME: 구단별 경기/클립/굿즈/인플루언서 콘텐츠 제공",
      "PLAY: 주간 하이라이트·팀별/인플루언서 영상 큐레이션",
      "PLAY DETAIL: 유튜브 재생, 좋아요·댓글, 굿즈 추천",
      "CLIP DETAIL: 풀스크린 9:16 모달 뷰어, 좋아요·상품 연동",
      "STORE: 구단/인플루언서/KBO 굿즈 카테고리 및 필터링",
      "PRODUCT DETAIL: 상품 정보·구매 버튼·리뷰/문의, 구매내역 반영",
      "CART & PAYMENT: 장바구니 모달, 쿠폰 사용·결제 흐름 구현",
      "EVENT PAGE: GSAP 인터랙션, 로그인 시 마스코트·쿠폰 발급",
      "AUTH: Firebase 로그인/회원가입, 구단 선택·주소 등록",
      "MYPAGE: 쇼핑내역·좋아요 영상·프로필 관리",
    ],
    techStack: [
      "React",
      "Vite",
      "Zustand",
      "React Query",
      "YouTube Data API v3",
      "styled-components",
      "GSAP",
      "Firebase",
    ],
    techDetails: [
      {
        name: "React",
        summary:
          "메인 홈, 팀 홈, 공통 UI를 컴포넌트 단위로 구조화하고 상태에 따라 조건부 렌더링을 구현.",
        usedFor: [
          "HOME/TEAM HOME/공통 UI 컴포넌트 구성",
          "상품·영상 상세 페이지 라우팅 기반 구성",
        ],
      },
      {
        name: "Vite",
        summary:
          "개발 서버 환경과 번들링을 제공하여 빠른 빌드와 효율적인 개발 환경을 구축.",
        usedFor: ["빠른 개발 서버 환경 세팅"],
      },
      {
        name: "React Router",
        summary:
          "경로와 파라미터를 기반으로 페이지를 분기하고, 팀 홈·영상 상세·상품 상세 페이지로의 이동을 제어.",
        usedFor: [
          "useParams(teamCode) 기반 팀 홈 페이지 렌더링",
          "영상/상품 상세 페이지 라우트 구현",
        ],
      },
      {
        name: "Zustand",
        summary:
          "전역 상태를 관리하여 헤더, 검색창, 팀 모드 등 공통 UI 동작을 일관성 있게 유지.",
        usedFor: [
          "헤더 높이·검색창 토글·팀 모드 전환 상태 관리",
          "페이지 간 공통 상태 공유",
        ],
      },
      {
        name: "React Query",
        summary:
          "비동기 데이터 fetching과 캐싱을 최적화하여 YouTube API 호출 시 응답성을 향상.",
        usedFor: [
          "YouTube 플레이리스트/비디오 데이터 요청 관리",
          "중복 요청 방지 및 캐싱 처리",
        ],
      },
      {
        name: "Axios",
        summary:
          "API 요청을 단순화하는 유틸로, React Query 훅 내부에서 YouTube API를 호출하는 데 사용.",
        usedFor: ["YouTube API 요청 처리", "데이터 fetch 유틸 작성"],
      },
      {
        name: "YouTube Data API v3",
        summary:
          "공식 API를 활용해 하이라이트/클립 영상 데이터를 수집하고 팀별 콘텐츠를 구성.",
        usedFor: [
          "플레이리스트/비디오 상세 데이터 연동",
          "팀별 영상 섹션 구성",
        ],
      },

      {
        name: "styled-components",
        summary:
          "컴포넌트 단위 스타일링으로 UI를 모듈화하고, 미디어 쿼리를 활용해 다양한 해상도에 대응.",
        usedFor: [
          "공통 Header/Footer 스타일 설계",
          "슬라이드 카드 및 레이아웃 반응형 구현",
        ],
      },
      {
        name: "GSAP",
        summary:
          "애니메이션 라이브러리로 이벤트 페이지의 마우스 인터랙션 배경을 구현해 사용자 경험을 강화.",
        usedFor: ["이벤트 페이지 배경 인터랙션", "전환 애니메이션"],
      },
      {
        name: "Firebase",
        summary:
          "인증, 데이터베이스, 호스팅을 통합 제공해 회원 관리부터 구매 내역 저장, 프로젝트 배포까지 처리.",
        usedFor: [
          "회원가입·로그인(Firebase Auth)",
          "구매내역·쿠폰 관리(Firestore)",
          "프로젝트 Hosting 배포",
        ],
      },
      {
        name: "Netlify Functions",
        summary:
          "서버리스 환경에서 상품 데이터를 API로 제공해 프론트엔드와 데이터 연동을 가능하게 함.",
        usedFor: ["상품 데이터를 크롤링 후 API화", "프론트엔드 fetch 연동"],
      },
      {
        name: "Kakao 주소 API",
        summary:
          "주소 검색과 자동 입력 기능을 제공해 회원가입 및 배송지 등록 과정을 간편화.",
        usedFor: [
          "회원가입 시 배송지 등록",
          "마이페이지 프로필 수정 기능 연동",
        ],
      },
    ],
    contributions: [
      {
        title: "HOME 페이지 구성",
        desc: "로그인 여부에 따라 메인 슬라이드를 MyhomeMainSlide/MainSlide로 분기하고 Shorts/Play 탭, 랭킹, 인기 선수, 콜라보 배너 등 주요 섹션을 배치했습니다. 이를 통해 사용자가 개인화된 콘텐츠와 리그 전체 콘텐츠를 명확히 구분해 경험할 수 있도록 했습니다.",
      },
      {
        title: "TEAM HOME – 경기/영상/인플루언서 섹션",
        desc: "UpcomingMatch(경기 일정), 구단별 영상(PlaySlidewithTabs/ShortsSlide), InfluencerZone을 구현했습니다. 팬들이 각 구단의 최신 경기와 영상을 한눈에 확인하고 인플루언서 콘텐츠까지 연결해 즐길 수 있도록 구성했습니다.",
      },
      {
        title: "InfluencerZone – 인플루언서 연동 UI",
        desc: "인플루언서 JSON 데이터를 기반으로 프로필, 영상, 연동 상품을 조건부로 렌더링했습니다. 이를 통해 팀 페이지 내에서 다양한 인플루언서 중심의 팬 콘텐츠 허브 역할을 하도록 구현했습니다.",
      },
      {
        title: "Header / TopSchedule / Footer",
        desc: "메인 내비게이션, 팀 모드 토글, 모바일 메뉴, 스토어 드롭다운, 검색창 UI/토글을 구현했습니다. 또한 KBO 일정 JSON을 연동해 TopSchedule 접힘/펼침 기능을 제공하고 Footer는 페이지별 테마에 대응하도록 설계했습니다.",
      },
      {
        title: "YouTube API + React Query 연동",
        desc: "YouTube 플레이리스트 및 비디오 디테일 데이터를 가져오는 훅을 작성·개선하고 캐싱 및 재요청 방지 설정을 적용했습니다. 이를 통해 영상 섹션의 응답성과 데이터 처리 효율을 높였습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "Chrome 브라우저 업데이트로 인한 호환성 이슈",
        desc: "6/25 발표 당일 Chrome 138 브라우저 업데이트 이후, 맥북 환경에서 동영상이 재생되지 않는 문제가 발생했습니다. 하루 뒤 정상적으로 복구되었지만, 이 경험을 통해 브라우저 업데이트와 같은 외부 요인으로도 기능이 예기치 않게 멈출 수 있음을 확인했습니다. 이를 계기로 특정 브라우저 버전에만 의존하지 않고 다양한 환경에서 동작을 검증하는 크로스 브라우징 테스트와 호환성 관리의 중요성을 깨달았습니다.",
      },
    ],
    improvements: [
      {
        title: "KBO 시즌 종료 후 컨텐츠",
        desc: "제작 당시에는 KBO 리그 시즌이 진행되고 있지만, 시간이 지나면 2025 시즌이 종료될 예정입니다. 2026년 새로운 시즌이 시작되기 전까지는 경기 일정이나 하이라이트 영상이 제공되지 않아 콘텐츠 공백이 발생할 수 있습니다. 이를 보완하기 위해 시즌 종료 후에도 이용자가 즐길 수 있는 대체 콘텐츠(지난 시즌 하이라이트 모음, 인기 선수/팀별 클립, 명장면 다시보기 등)를 제공하는 기능이 필요합니다.",
      },
    ],
    imageList: [
      "/images/details/rookie-detail1.jpg",
      "/images/details/rookie-detail2.jpg",
    ],
    github: "https://github.com/dayekimm0/Rookie",
    link: "https://rookie-dd013.firebaseapp.com/",
    figma:
      "https://www.figma.com/design/EB9qqlUAW1j5HOxTQvtfyq/ROOKie-Project-2.0?node-id=0-1&p=f&t=xRlRxDU7U0Mf5vlE-0",
    videoUrl: null,
  },
  {
    id: "team-kuora",
    type: "팀",
    title: "KUORA",
    date: "2025.03 ~ 2025.04",
    duration: "1개월",
    size: 5,
    position: "PM, Frontend (Event / Header · Cart)",
    summary:
      "KUORA는 독창적인 디자인과 기능성을 추구하는 프리미엄 가구 브랜드를 주제로 제작한 이커머스 웹사이트입니다. 하이엔드 소비자를 대상으로 세련된 UI와 직관적인 사용 흐름을 통해 고급스러운 쇼핑 경험을 제공하는 것을 목표로 했습니다.",
    category: ["React", "JavaScript", "SCSS", "UI/UX"],
    thumbnail: "/images/thumb/kuora-thumb.jpg",
    fullDescription: `KUORA는 독창적인 디자인과 기능성을 추구하는 프리미엄 가구 브랜드를 주제로 제작한 이커머스 웹사이트입니다. 하이엔드 소비자를 대상으로 세련된 UI와 직관적인 사용 흐름을 통해 고급스러운 쇼핑 경험을 제공하는 것을 목표로 했습니다.  
저는 PM으로서 일정 관리와 역할 분배, 전체 UI 가이드라인을 총괄했으며, Header(검색·장바구니), CartContext 기반 장바구니 기능, Event Page(컬렉션 전용 인터랙티브 슬라이드), 상품 DB(JSON 구성 → GitHub Pages 배포 → fetch 연동) 구현을 담당했습니다.

    `,
    features: [
      "HOME: 브랜드 아이덴티티를 강조한 메인 랜딩 페이지",
      "PRODUCTS: 카테고리/디자이너/가격별 필터링 및 정렬",
      "PRODUCT DETAIL: 이미지, 상세 정보, 장바구니 담기 기능 제공",
      "CART: CartContext 기반 장바구니 모달, 수량 조절·삭제·총액 계산",
      "PAYMENT: 장바구니 → 결제 페이지 흐름, 구매 정보 확인 가능",
      "EVENT PAGE: 컬렉션 전용 인터랙티브 슬라이드 + 핫스팟(상품 상세 연동)",
      "상품 DB: JSON으로 구성 후 GitHub Pages 배포, fetch 연동",
      "공통 UI: Header(검색/카트/내비게이션) · Footer",
    ],
    techStack: [
      "React",
      "React Router",
      "Context API",
      "SCSS",
      "GitHub Pages",
      "Netlify",
    ],
    techDetails: [
      {
        name: "React",
        summary:
          "전체 UI를 컴포넌트 단위로 구조화하고 상태 기반 렌더링으로 상품·장바구니·결제 흐름을 일관되게 구현.",
        usedFor: [
          "Header/Footer 공통 컴포넌트",
          "Products/Detail/Payment/Event 페이지",
        ],
      },
      {
        name: "React Router",
        summary:
          "경로·파라미터 기반 라우팅으로 리스트→상세→결제까지 사용자 흐름을 연결.",
        usedFor: ["/products/:category, /detail?id=, /payment 라우트"],
      },
      {
        name: "SCSS",
        summary:
          "공통 변수/모듈과 미디어쿼리로 스타일 일관성과 반응형 레이아웃을 구현.",
        usedFor: [
          "공통 스타일 가이드",
          "Products/Grid/Detail/Payment 반응형 레이아웃",
        ],
      },
      {
        name: "Context API",
        summary:
          "전역 상태로 상품/장바구니 데이터를 공유하고, 로컬스토리지 연동으로 상태를 유지.",
        usedFor: [
          "CartContext 장바구니 상태 관리",
          "ProductContext 상품 데이터 제공",
        ],
      },
      {
        name: "Fetch API",
        summary: "정적 JSON 데이터 소스를 호출해 상품 목록·상세 데이터를 로딩.",
        usedFor: ["GitHub Pages의 products.json 연동"],
      },
      {
        name: "LocalStorage",
        summary:
          "장바구니 상태를 브라우저에 저장해 새로고침/탭 간에도 상태 유지.",
        usedFor: ["cartItems 직렬화/복원"],
      },
      {
        name: "GitHub Pages",
        summary:
          "상품 DB와 이미지를 정적 리소스로 배포해 프론트에서 API처럼 활용.",
        usedFor: ["상품 DB 제공", "이미지 리소스 외부 호출"],
      },
      {
        name: "Netlify",
        summary: "프론트엔드 애플리케이션 배포/호스팅.",
        usedFor: ["팀 프로젝트 메인 사이트 배포"],
      },
      {
        name: "Kakao 주소 API",
        summary:
          "결제 단계에서 우편번호/주소 검색 기능을 제공해 배송지 입력 UX 개선.",
        usedFor: ["Payment ‘주소 찾기’ 기능"],
      },
    ],
    contributions: [
      {
        title: "PM & UI 통합",
        desc: "팀 내 일정과 역할을 분배하고 전체 UI 가이드라인을 정리·관리했습니다. 프로젝트 전반의 일관된 사용자 경험을 위해 디자인과 인터랙션 흐름을 맞추는 데 주력했습니다.",
      },
      {
        title: "상품 DB",
        desc: "상품 데이터를 JSON으로 구성해 GitHub Pages에 배포하고, 클라이언트에서는 Fetch API로 연동했습니다. 서버를 두지 않고도 안정적인 상품 정보 제공이 가능하도록 데이터 구조를 직접 설계했습니다.",
      },
      {
        title: "Header",
        desc: "React Router 기반의 네비게이션과 검색·카트 아이콘을 연결했습니다. 검색어 입력 시 상품 상세로 이동하거나 미스매치 시 안내 문구를 제공해 사용자 탐색성을 개선했습니다.",
      },
      {
        title: "Cart",
        desc: "Context API를 활용해 CartContext를 구성하고, 장바구니 모달에서 상품 담기·수량 증감·삭제·총액 계산을 구현했습니다. 장바구니에서 결제 페이지까지 자연스럽게 이어지는 흐름을 설계했습니다.",
      },
      {
        title: "Event Page",
        desc: "react-slick 기반의 커스텀 슬라이드를 제작해 브랜드 컬렉션을 강조했습니다. 상품 이미지 위에 포인트를 배치하고 React Portal을 사용해 클론 슬라이드 좌표 문제를 해결, 클릭 시 상품 카드 오버레이가 뜨며 상세 페이지로 연결되는 직관적인 UX를 구현했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "카트 데이터 로컬스토리지 미적용",
        desc: "처음에는 카트에 로컬스토리지를 적용하지 않아 결제 페이지에서 새로고침 시 카트 아이템이 모두 사라지는 문제가 있었습니다. 이는 결제 과정의 흐름을 끊어 사용자 경험에 불편을 주었습니다. 이후 로컬스토리지를 활용해 카트 데이터를 영속적으로 저장하도록 개선하여 새로고침 이후에도 아이템이 유지되도록 문제를 해결했습니다.",
      },
    ],
    improvements: [
      {
        title: "검색 기능 보완",
        desc: "현재 검색 기능은 제품명을 정확히 입력했을 때 해당 제품의 상세 페이지로 바로 이동하는 방식으로 구현되어 있습니다. 기본적인 탐색에는 문제가 없지만, 추후에는 검색 결과 페이지를 제공하여 입력한 키워드를 포함하는 제품 리스트를 먼저 보여주는 방식으로 개선할 계획입니다.",
      },
    ],
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
    position: "Frontend (Chart / Header)",
    summary:
      "메타포는 K-pop 팬덤 문화를 하나의 공간에서 즐길 수 있도록 제작한 팀 프로젝트 웹사이트입니다. 아티스트/차트/매거진의 공간에서 다양한 콘텐츠와 직관적인 UI로 아티스트 활동을 쉽고 재미있게 즐길 수 있도록 설계하였습니다.",
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
        summary:
          "웹사이트 전반의 동적 기능을 구현. 차트 페이지에서 곡 불러오기, 재생, 좋아요 토글을 처리하고, 공통 Header 영역의 스크롤 이벤트, 모바일 메뉴 토글, 검색창 열림/닫힘 기능을 제어.",
        usedFor: [
          "차트 데이터 비동기 로딩과 렌더링 처리",
          "Top10/주간/월간 탭 전환 상태 관리",
          "오디오 단일 재생 및 종료 로직 제어",
          "Header 메뉴 토글 및 스크롤 이벤트 구현",
        ],
      },
      {
        name: "SCSS",
        summary:
          "반응형 웹을 위해 SCSS로 공통 스타일과 레이아웃을 관리. 변수와 믹스를 활용해 해상도별 반응형 처리를 적용하고, 공통 요소(헤더, 푸터, 버튼 등)의 스타일을 모듈화하여 재사용성을 확보.",
        usedFor: [
          "다양한 해상도 대응 반응형 레이아웃 설계",
          "공통 컴포넌트 스타일 재사용",
          "모듈 단위 SCSS 관리로 유지보수성 확보",
        ],
      },
      {
        name: "jQuery Slick",
        summary:
          "메인 및 콘텐츠 영역의 슬라이드를 구성하기 위해 Slick 플러그인을 적용. 복잡한 슬라이더 기능을 단순화하여 배너와 콘텐츠 캐러셀을 제작.",
        usedFor: ["메인 배너 슬라이드 구성", "콘텐츠 섹션별 캐러셀 구현"],
      },
      {
        name: "LocalStorage",
        summary:
          "실제 서버 없이 로그인/회원가입 상태를 유지하기 위해 LocalStorage를 활용. 브라우저 종료 후에도 사용자 세션을 대체.",
        usedFor: [
          "로그인/회원가입 상태 로컬 저장",
          "세션 대체 사용자 인증 유지",
        ],
      },
      {
        name: "Firebase",
        summary: "Firebase Hosting을 사용해 프로젝트를 배포.",
        usedFor: ["정적 파일 호스팅 및 서비스 배포"],
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
  {
    id: "team-pet",
    type: "팀",
    title: "PETOPIA",
    date: "2025.01",
    duration: "1주",
    size: 4,
    position: "PM, UI·UX",
    summary:
      "PETOPIA는 반려동물과 보호자를 위한 통합 라이프스타일 플랫폼으로, 정보 탐색 편의성과 맞춤 경험을 중심으로 설계한 UI·UX 프로젝트입니다. 피그마로 와이어프레임부터 프로토타입까지 제작하였으며, 사용자 리서치 기반 UX 개선을 목표로 했습니다.",
    category: ["Figma"],
    thumbnail: "/images/thumb/pet-thumb.jpg",
    fullDescription: `PETOPIA는 반려동물과 보호자를 위한 장소·병원·서비스 정보를 한데 모은 플랫폼입니다.
사용자 리서치로 도출한 문제(분산된 정보·후기 부재·관리 불편)를 바탕으로 로그인 / 마이페이지 / 병원 / 플레이스 중심의 구조를 설계하고 피그마로 주요 흐름을 구현했습니다.
팀 전원이 UI·UX 역할을 맡았으며, 저는 플레이스 화면의 UI 시안 제작과 UX 리서치·페르소나·솔루션 제안을 담당했습니다.
(커뮤니티와 스토어는 IA까지만 설계하고 UI 제작은 제외되었습니다.)
    `,
    features: [
      "사용자 리서치를 기반으로 페르소나 및 사용자 여정맵 도출",
      "서비스 정보구조(IA) 및 전체 워크플로우 설계",
      "피그마 프로토타입으로 주요 사용자 시나리오 상호작용 구현",
      "핵심 기능 영역(로그인, 마이페이지, 병원, 플레이스) 중심의 UX/UI 시안 설계 및 제작",
      "스토어, 커뮤니티 영역은 IA 및 서비스 구조 정의 단계까지 진행",
    ],
    techStack: ["UI/UX", "Figma", "Prototype"],
    techDetails: [
      {
        name: "Figma",
        summary:
          "와이어프레임, UI 시안, 디자인 시스템 제작 및 프로토타입 구현에 사용. 각 파트별 프로토타입을 통해 클릭·탭·페이지 전환 등 주요 상호작용을 재현하고, 발표 시 사용자 흐름을 시각적으로 전달했습니다.",
        usedFor: [
          "UI 시안 및 인터랙션 프로토타입 제작",
          "병원, 플레이스 등 주요 플로우 설계 및 연결 구조 구현",
        ],
      },
    ],
    contributions: [
      {
        title: "PM",
        desc: "팀 일정과 진행 상황을 관리하며, 회의에서 팀원 의견을 수렴해 방향성을 조율했습니다. 협업 효율을 높이기 위해 회의록과 일정표를 문서화했고, 프로젝트 발표를 담당했습니다.",
      },
      {
        title: "UI — 플레이스",
        desc: "플레이스 화면의 고해상도 UI를 설계·제작했습니다. 지도 기반 탐색과 리스트 병행 인터페이스를 구성하고, 카테고리 필터·시설 아이콘 등으로 직관적인 탐색 경험을 구현했습니다. 또한 피그마 프로토타입을 통해 주요 상호작용(검색→상세→후기)을 구현했습니다.",
      },
      {
        title: "UX — 리서치, 페르소나, 솔루션",
        desc: "사용자 인터뷰와 설문을 통해 인사이트를 도출하고, 페르소나 및 사용자 여정을 정의했습니다. 이를 기반으로 주요 기능(검색·필터·비대면 상담·캘린더 등)의 솔루션을 제안하고 UX 발표 자료를 구성했습니다.",
      },
    ],
    improvements: [
      {
        title: "서비스 확장 및 실제 구현",
        desc: "현재는 피그마 기반의 UI·UX 시안 및 프로토타입 단계이지만, 추후 여력이 된다면 React Native 등으로 실제 서비스를 개발하고 앱 형태로 구현해보고자 합니다.",
      },
    ],
    imageList: [
      "/images/details/pet-detail2.jpg",
      "/images/details/pet-detail3.jpg",
      // "/images/details/pet-detail4.jpg",
      "/images/details/pet-detail (1).jpg",
      "/images/details/pet-detail (2).jpg",
      "/images/details/pet-detail (3).jpg",
    ],
    figma:
      "https://www.figma.com/design/m77PLBNvs9U5kQh2Y34CRN/%EB%B0%9C%ED%91%9C-ppt?node-id=0-1&p=f&t=bHq8zTjyFh2bAu8k-0",
    figma2:
      "https://www.figma.com/design/5GL5fzGejEgg061PYt2DT6/prototype-%EC%B5%9C%EC%A2%85%EB%B3%B8--%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=321-1657&t=mrl5hJCoDhgXWYwt-0",
    videoUrl: null,
  },
];
export default teamData;
