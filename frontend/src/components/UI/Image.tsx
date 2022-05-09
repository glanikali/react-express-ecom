import React, { useState } from "react";

type Props = {
  className?: string;
  alt: string;
  src: string;
  fallback?: string;
  height?: string;
  width?: string;
};

const Image = ({
  src,
  className = "",
  alt = "",
  fallback = "",
  height = "auto",
  width = "auto",
}: Props) => {
  const [srcState, setSrcState] = useState(src);
  return (
    <div className="relative" style={{ height, width }}>
      <img
        alt={alt}
        src={srcState}
        className="object-cover absolute top-0 w-full h-full"
        onError={() => {
          fallback
            ? setSrcState(fallback)
            : console.error("fallback not set for image");
        }}
      ></img>
    </div>
  );
};

export default Image;
