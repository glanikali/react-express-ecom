import { useLottie } from "lottie-react";

const Animation = ({ json, ...props }) => {
  const options = {
    animationData: json,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Animation;
