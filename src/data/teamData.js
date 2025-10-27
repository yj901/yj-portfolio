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
      "ROOKie는 KBO 하이라이트 영상 큐레이션과 굿즈 커머스를 결합한 OTT 커머스 웹 서비스입니다. React 기반으로 개발되었으며, 팬들이 원하는 영상을 빠르게 즐기고 굿즈 구매까지 자연스럽게 이어지는 통합 경험을 제공하도록 설계했습니다.",
    category: ["React", "JavaScript", "UI/UX"],
    thumbnail: "/images/thumb/rookie-thumb.jpg",
    fullDescription: `ROOKie는 KBO 하이라이트 영상 큐레이션과 굿즈 커머스를 결합한 OTT 커머스 웹 서비스입니다. 사용자에게 영상 시청부터 관련 상품 구매까지 끊김 없는 통합 경험을 제공하는 것을 목표로 구조를 설계했습니다. 
    저는 재사용 가능한 컴포넌트 구조를 기반으로 메인 HOME 페이지, TEAM HOME(업커밍 매치, 인플루언서 존 등), 그리고 공통 UI(Header, Footer)를 구현하여 개발 효율성을 확보했습니다. YouTube Data API 연동 시 React Query를 도입하여 데이터 캐싱 및 최신화 로직을 최적화했습니다. 이를 통해 API 호출 효율을 높이고 동적 슬라이드 UI를 안정적으로 구성했습니다.
`,
    features: [
      "HOME: 로그인/비로그인 분기, 리그 순위·인기 굿즈 큐레이션",
      "TEAM HOME: 구단별 경기/클립/굿즈/인플루언서 콘텐츠 제공",
      "PLAY: 주간 하이라이트·팀별/인플루언서 영상 큐레이션",
      "PLAY DETAIL: 유튜브 재생, 좋아요·댓글, 굿즈 추천",
      "CLIP DETAIL: 모바일 최적화된 풀스크린 9:16 모달 뷰어, 좋아요·상품 연동",
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
          "선언적 UI 구축 및 상태 기반 조건부 렌더링을 통해 메인/팀 홈 등 대규모 UI를 컴포넌트 단위로 모듈화하여 개발 생산성 확보.",
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
          "경로와 파라미터를 기반으로 페이지를 분기하고 팀 홈·영상 상세·상품 상세 페이지로의 이동을 제어.",
        usedFor: [
          "useParams를 활용한 동적 라우팅 구성 (teamCode 기반)",
          "영상/상품 상세 페이지 라우트 구현",
        ],
      },
      {
        name: "Zustand",
        summary:
          "경량의 훅 기반 전역 상태 관리 라이브러리로 불필요한 리렌더링을 최소화하며 공통 UI 상태를 효율적으로 분리 및 관리.",
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
          "API 요청을 단순화하는 유틸로 React Query 훅 내부에서 YouTube API를 호출하는 데 사용.",
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
        title: "사용자 맞춤형 콘텐츠 분기 처리",
        desc: "로그인 상태에 따른 조건부 렌더링을 통해 개인화된 메인 슬라이드와 콘텐츠 섹션을 제공했습니다. 사용자가 리그 전체 및 개인화된 정보를 명확히 구분해 경험하도록 구조적 분리를 설계했습니다.",
      },
      {
        title: "재사용 컴포넌트 기반 TEAM HOME 설계",
        desc: "UpcomingMatch, PlaySlide 등 구단별 핵심 정보 컴포넌트들을 재사용성을 고려하여 설계했습니다. 팬들이 한눈에 최신 경기, 영상, 인플루언서 콘텐츠를 확인하는 정보 집약적 UI를 완성했습니다.",
      },
      {
        title: "JSON 데이터 기반 동적 콘텐츠 렌더링",
        desc: "인플루언서 JSON 데이터를 활용, 데이터 유무에 따른 조건부 렌더링을 통해 프로필/영상/상품 UI를 동적으로 구성했습니다. 팀 페이지 내에서 데이터 중심으로 콘텐츠 허브 역할을 수행하도록 설계했습니다.",
      },
      {
        title: "공통 UI 컴포넌트의 확장성 및 데이터 연동",
        desc: "Header, Footer 등 공통 컴포넌트의 모듈화를 통해 페이지별 테마에 유연하게 대응하도록 설계했습니다. KBO 일정 JSON을 연동하여 TopSchedule의 접힘/펼침 기능을 구현하고 UX 편의성을 높였습니다.",
      },
      {
        title: "React Query 기반 비동기 데이터 최적화",
        desc: "useQuery 훅을 활용하여 YouTube API 연동 로직을 작성했습니다. 캐싱 및 재요청 방지 설정을 통해 불필요한 네트워크 통신을 최소화하고 영상 섹션의 응답성과 데이터 처리 효율을 극대화했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "Chrome 브라우저 업데이트로 인한 호환성 이슈",
        desc: "Chrome 138 업데이트 직후 초기에는 맥북 환경에서 동영상 재생 기능이 예기치 않게 멈추는 문제가 발생했습니다. 이 경험을 통해 브라우저 업데이트와 같은 외부 환경 변화로도 기능 오류가 발생할 수 있음을 확인했습니다. 이를 계기로 특정 환경에 의존하지 않는 코드 검증과 크로스 브라우징 및 런타임 호환성 테스트의 중요성을 실무적으로 확립했습니다.",
      },
    ],
    improvements: [
      {
        title: "시즌 종료 후 콘텐츠 전략",
        desc: "KBO 시즌 종료 후 데이터 공백 발생 시 사용자 경험 저하가 예상됩니다. 이를 보완하기 위해 시즌 상태에 따른 조건부 렌더링을 적용, 대체 콘텐츠(프리시즌 구단 컨텐츠, 하이라이트, 명장면 클립) 섹션을 제공할 계획입니다. 콘텐츠 유무에 관계없이 사용자가 서비스에 머물 수 있는 UX 흐름을 유지하고자 합니다.",
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
      "KUORA는 독창적인 디자인과 기능성을 추구하는 프리미엄 가구 브랜드를 주제로 제작된 React 기반 이커머스 웹사이트입니다. 하이엔드 소비자를 대상으로 세련된 UI와 직관적인 사용 흐름을 통해 고급스러운 쇼핑 경험을 구현했습니다.",
    category: ["React", "JavaScript", "SCSS", "UI/UX"],
    thumbnail: "/images/thumb/kuora-thumb.jpg",
    fullDescription: `KUORA는 React 기반으로 개발된 프리미엄 가구 이커머스 웹사이트입니다. 하이엔드 소비자를 위한 세련된 UI와 직관적인 쇼핑 흐름을 구현하여 고급스러운 디지털 경험을 제공하는 것을 목표로 설계했습니다. 
    저는 PM으로서 프로젝트 일정 관리 및 UI/UX 가이드라인을 총괄하여 협업의 일관성을 확보했습니다. 기술적으로는 컴포넌트 단위 설계를 기반으로 Header 및 Event Page 등 핵심 UI를 구현했습니다. Context API를 활용한 'CartContext' 기반으로 장바구니 기능을 구현하여 전역 상태 관리의 일관성을 확보했습니다. 또한 GitHub Pages 기반의 서버리스 데이터 연동 시스템을 설계하여 상품 정보의 안정적 제공과 배포 단순화를 달성했습니다.
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
        title: "PM 역할 수행 및 UI/UX 가이드라인 관리",
        desc: "프로젝트 일정 및 역할을 주도적으로 분배하고, 전체 UI 가이드라인을 정의하여 디자인 및 인터랙션 흐름의 일관된 사용자 경험(UX) 품질을 확보하는 데 기여했습니다.",
      },
      {
        title: "GitHub Pages 기반 서버리스 데이터 연동 설계",
        desc: "상품 데이터를 JSON으로 구조화 후 GitHub Pages에 배포했습니다. 백엔드 구축 없이 Fetch API 연동을 통해 안정적인 상품 정보 제공 시스템을 구현하여 개발 효율성 및 배포 단순화를 달성했습니다.",
      },
      {
        title: "라우터 기반의 검색 및 탐색 UI 최적화",
        desc: "React Router를 활용한 네비게이션 시스템을 구축하고, 검색 기능을 연동하여 사용자 탐색 흐름을 개선했습니다. 검색어 결과에 따른 조건부 렌더링으로 직관적인 사용자 피드백을 제공했습니다.",
      },
      {
        title: "Context API를 활용한 전역 상태 관리",
        desc: "Context API 기반의 CartContext를 설계하고 상품 상태 로직(수량 증감, 삭제, 총액 계산)을 구현했습니다. 장바구니에서 결제까지 상태 관리를 일원화하여 데이터의 일관성과 유동적인 흐름을 확보했습니다.",
      },
      {
        title: "React Portal 기반의 커스텀 슬라이드 구현",
        desc: "react-slick 기반으로 브랜드 강조 커스텀 슬라이드를 제작했습니다. React Portal을 활용하여 복잡한 슬라이드 좌표 문제를 해결하고, 직관적인 상세 연결 UX를 제공했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "카트 데이터 영속성 확보",
        desc: "초기에는 CartContext 상태만 관리하고 로컬스토리지를 연동하지 않아, 결제 과정 중 새로고침 시 카트 아이템이 유실되는 문제가 발생했습니다. useEffect 훅을 활용해 카트 상태가 변경될 때마다 로컬스토리지에 데이터를 저장하고, 컴포넌트 마운트 시 불러오도록 개선했습니다. 이를 통해 상태 관리의 영속성을 확보하여 사용자 경험의 흐름을 끊지 않고 문제를 해결했습니다.",
      },
    ],
    improvements: [
      {
        title: "검색 결과 페이지 로드맵 수립",
        desc: "현재는 정확한 제품명 입력 시 상세 페이지로 직접 이동하는 방식으로 구현되어 있습니다. 추후 검색 키워드를 기반으로 상품 DB를 필터링하여 해당 리스트를 보여주는 검색 결과 페이지를 구현할 계획입니다. 이를 통해 사용자 탐색의 폭을 넓히고 이커머스 기능의 완성도를 높이고자 합니다.",
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
      "메타포는 K-pop 팬덤 문화를 통합적으로 즐길 수 있도록 제작한 웹 서비스입니다. 아티스트, 차트, 매거진을 중심으로 직관적인 UI와 다양한 콘텐츠를 구성하여 팬덤 활동의 편의성과 즐거움을 극대화했습니다.",
    category: ["JavaScript"],
    thumbnail: "/images/thumb/metaphor-thumb.jpg",
    fullDescription: `메타포는 K-pop 팬덤 문화를 통합적으로 즐길 수 있도록 개발된 팀 프로젝트 웹 서비스입니다. MZ세대를 타겟으로 아티스트 정보, 차트, 매거진 등 다양한 콘텐츠를 한 곳에 집약하고 효율적인 기능 설계를 목표로 했습니다.
    이 프로젝트는 기획부터 UI/UX 설계 및 프론트엔드 구현까지 팀원들과 협업했습니다. 저는 전체 UI 구조 중 공통 레이아웃(Header)과 핵심 기능인 차트 페이지의 개발을 담당하며 데이터 기반의 동적 콘텐츠 구현에 집중했습니다. 차트 페이지 개발 시 Vanilla JavaScript를 사용하여 데이터 기반 탭 전환 로직과 콘텐츠 동적 갱신 기능을 구현했습니다. 특히 오디오 충돌 방지를 위해 단일 재생 로직을 적용하여 사용자 경험을 개선하는 데 주력했습니다.`,
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
          "순수 JavaScript를 활용하여 웹사이트 전반의 동적 기능 및 비즈니스 로직을 구현. 오디오 단일 재생 로직 등 복잡한 상태를 제어하고 DOM 조작을 통해 UI 인터랙션을 완성.",
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
          "반응형 웹 설계를 위해 SCSS로 공통 스타일과 레이아웃 관리. Variable과 Mixin을 활용하여 해상도별 반응형 처리를 적용하고 공통 요소(헤더, 푸터, 버튼 등)의 스타일을 모듈화하여 재사용성 확보.",
        usedFor: [
          "다양한 해상도 대응 반응형 레이아웃 설계",
          "공통 컴포넌트 스타일 재사용",
          "모듈 단위 SCSS 관리로 유지보수성 확보",
        ],
      },
      {
        name: "jQuery Slick",
        summary:
          "검증된 jQuery 플러그인인 Slick을 활용하여 접근성과 기능성이 확보된 슬라이드 컴포넌트를 빠르게 구현. 배너 및 캐러셀 기능 구현 시 플러그인 옵션 제어 능력을 발휘.",
        usedFor: ["메인 배너 슬라이드 구성", "콘텐츠 섹션별 캐러셀 구현"],
      },
      {
        name: "LocalStorage",
        summary:
          "SPA 환경의 세션 영속성을 위해 LocalStorage를 활용. 사용자 인증 상태 등 핵심 데이터를 브라우저에 저장하여 새로고침 후에도 상태가 유지되도록 구현.",
        usedFor: [
          "로그인/회원가입 상태 로컬 저장",
          "세션 대체 사용자 인증 유지",
        ],
      },
      {
        name: "Firebase",
        summary:
          "Firebase Hosting을 활용하여 정적 파일 배포 환경을 구축하고 프로젝트를 안정적으로 서비스.",
        usedFor: ["정적 파일 호스팅 및 서비스 배포"],
      },
    ],
    contributions: [
      {
        title: "공통 함수를 활용한 비동기 데이터 처리 효율화",
        desc: "TOP10, 주간, 월간 등 다양한 차트 데이터를 공통 비동기 함수로 처리하여 데이터 수집 로직의 재사용성 및 유지보수 효율을 높였습니다. 데이터 파싱 후 효율적인 목록 렌더링을 구현했습니다.",
      },
      {
        title: "상태 기반 탭 전환 및 오디오 싱글톤 패턴 구현",
        desc: "상태 관리를 기반으로 차트 탭 전환 시 데이터를 효과적으로 갱신하도록 설계했습니다. 특히 오디오 제어 로직을 적용하여 한 번에 하나의 곡만 재생되는 싱글톤 패턴을 구현, 오디오 충돌을 방지하고 사용자 경험(UX)을 개선했습니다.",
      },
      {
        title: "스크롤 이벤트 기반 반응형 헤더 인터랙션 구현",
        desc: "스크롤 방향을 감지하는 이벤트를 활용하여 헤더의 동적 숨김/표시 인터랙션을 구현했습니다. 이를 통해 화면 가용 공간을 확보하고 UX를 개선했습니다. 모바일 환경의 햄버거 메뉴 및 검색창은 토글 상태 관리를 통해 유연하게 대응하도록 설계했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "대량 콘텐츠 로딩으로 인한 성능 및 UX 저하 해결",
        desc: "발표 피드백에서 대량의 리스트 콘텐츠 로딩 속도와 긴 스크롤로 인한 사용자 경험 저하 문제가 지적되었습니다. 이에 JavaScript를 활용해 콘텐츠 양에 따라 페이지 번호가 동적으로 생성되는 페이지네이션 기능을 구현했습니다. 이를 통해 초기 로딩 부하를 분산하고 탐색 편의성을 높이는 데 성공했습니다.",
      },
    ],
    improvements: [
      {
        title: "아티스트 검색 기능 구현",
        desc: "현재 검색 기능은 서비스 완성도를 위해 필수적으로 구현해야 할 영역입니다. 향후 아티스트명을 기반으로 하는 검색 기능을 최우선으로 구현하고 사용자에게 정확한 정보 탐색 경험을 제공할 계획입니다.",
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
      "PETOPIA는 반려동물과 보호자를 위한 통합 라이프스타일 플랫폼으로 정보 탐색 편의성과 맞춤 경험을 중심으로 설계한 UI·UX 프로젝트입니다. 피그마로 와이어프레임부터 프로토타입까지 제작하였으며 사용자 리서치 기반 UX 개선을 목표로 했습니다.",
    category: ["Figma"],
    thumbnail: "/images/thumb/pet-thumb.jpg",
    fullDescription: `PETOPIA는 사용자 리서치 기반으로 반려동물과 보호자의 정보 탐색 및 관리 불편 문제를 해결하기 위해 설계된 통합 UI/UX 플랫폼 시안입니다. 핵심 문제점(정보 분산, 후기 부재) 해결을 목표로 로그인, 마이페이지, 병원, 플레이스 중심의 구조를 설계하고 Figma로 주요 흐름을 구현했습니다.
    팀 전원이 UI/UX 역할을 수행했으며 저는 UX 리서치, 페르소나 정의, 솔루션 제안 등 초기 기획 단계를 주도했습니다. 특히 핵심 화면인 플레이스의 UI 시안 제작과 상호작용 흐름 구현을 담당했습니다. (커뮤니티 및 스토어는 정보 구조 설계(IA)까지만 진행)
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
          "와이어프레임부터 디자인 시스템 기반 UI 시안 제작에 활용. Figma의 프로토타입 기능을 통해 사용자 여정에 따른 클릭, 탭, 페이지 전환 등 핵심 상호작용을 구현 및 검증하여, 최종 UX 흐름의 사용성을 시각적으로 확인했습니다.",
        usedFor: [
          "UI 시안 및 인터랙션 프로토타입 제작",
          "병원, 플레이스 등 주요 플로우 설계 및 연결 구조 구현",
        ],
      },
    ],
    contributions: [
      {
        title: "프로젝트 관리 및 협업 프로세스 설계",
        desc: "팀 일정 관리와 역할 분배를 주도하고 회의에서 팀원 의견을 수렴하여 UX/UI 방향성을 조율했습니다. 회의록 및 일정표 문서화를 통해 협업의 효율과 투명성을 확보하고 프로젝트 발표를 담당했습니다.",
      },
      {
        title: "지도 기반 장소 탐색 UI/인터랙션 설계",
        desc: "사용자 리서치 결과를 반영하여 플레이스 화면의 고해상도 UI 시안을 제작했습니다. 지도 기반 탐색과 정보 리스트 인터페이스를 병행 구성하여 정보 접근성을 극대화하고 피그마 프로토타입으로 검색-상세-후기 흐름의 주요 상호작용을 구현했습니다.",
      },
      {
        title: "사용자 리서치 기반 UX 문제 정의 및 솔루션 제안",
        desc: "사용자 인터뷰 및 설문을 통해 분산된 정보와 후기 부재라는 핵심 문제를 도출했습니다. 이를 기반으로 페르소나와 사용자 여정 지도를 정의하고 비대면 상담, 캘린더 등 핵심 기능의 솔루션을 제안하여 UX 설계의 논리적 근거를 마련했습니다.",
      },
    ],
    improvements: [
      {
        title: "모바일 서비스 확장을 위한 실제 구현 로드맵",
        desc: "현재 피그마 프로토타입으로 완성된 UX/UI 시안을 바탕으로 React Native 등의 크로스 플랫폼 기술을 활용하여 실제 모바일 앱으로 구현하는 것을 최종 목표로 합니다. 이를 통해 지도 기반 데이터 연동 및 복잡한 상태 관리 등의 기술적 난이도를 극복하며 서비스의 완성도를 높이고자 합니다.",
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
