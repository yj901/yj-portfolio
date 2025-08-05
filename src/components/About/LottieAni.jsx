import Lottie from "lottie-react";
import animationData from "../../assets/lotties/circle-animation.json";

const LottieAni = () => {
  return (
    <Lottie
      className="lottie"
      animationData={animationData}
      loop
      autoplay
      style={{ width: 480, height: 480 }}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice", // 필요시
        progressiveLoad: true, // 성능 옵션
        clearCanvas: false,
      }}
    />
  );
};

export default LottieAni;
