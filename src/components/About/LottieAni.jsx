import Lottie from "lottie-react";
import lottieFile from "../../assets/lotties/circle-animation.json";

const LottieAni = () => {
  return (
    <Lottie
      className="lottie"
      animationData={lottieFile}
      loop
      autoplay
      style={{ width: 480, height: 480 }}
    />
  );
};

export default LottieAni;
