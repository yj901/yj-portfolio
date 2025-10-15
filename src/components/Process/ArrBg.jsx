import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArrBg = () => {
  const animateRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > 1200;

    if (isDesktop) {
      const trigger = ScrollTrigger.create({
        trigger: svgRef.current,
        start: "top 50%",
        once: true,
        onEnter: () => {
          if (animateRef.current) animateRef.current.beginElement();
        },
      });

      return () => trigger.kill();
    } else {
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = 0;
        pathRef.current.style.transition = "none";
      }
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1717"
      height="456"
      viewBox="0 0 1717 456"
      fill="none"
      className="arrbg"
    >
      <defs>
        <mask id="dash-mask">
          <rect width="100%" height="100%" fill="black" />
          <path
            ref={pathRef}
            d="M1710.5 5C1680.5 154 1585 252 1488.5 252C1330 252 1294.5 126 1175 126C975 126 850 454 666 454C502.5 454 452.5 293 312.5 293C172.5 293 1 446 1 446"
            stroke="white"
            strokeWidth="4"
            strokeDasharray="2075"
            strokeDashoffset="2075"
          >
            <animate
              ref={animateRef}
              attributeName="stroke-dashoffset"
              from="-2075"
              to="0"
              dur="2.5s"
              fill="freeze"
              begin="indefinite"
            />
          </path>
        </mask>
      </defs>

      <g mask="url(#dash-mask)">
        <path
          d="M1710.5 5C1680.5 154 1585 252 1488.5 252C1330 252 1294.5 126 1175 126C975 126 850 454 666 454C502.5 454 452.5 293 312.5 293C172.5 293 1 446 1 446"
          stroke="#C0C9C6"
          strokeWidth="3"
          strokeDasharray="12 8"
          fill="none"
        />
      </g>

      <path
        d="M1700 13L1711.5 0L1717 16.5L1700 13Z"
        className="arrowHead"
        fill="#C0C9C6"
      />
    </svg>
  );
};

export default ArrBg;
