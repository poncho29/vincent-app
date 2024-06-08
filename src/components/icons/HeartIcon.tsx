import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGSVGElement> {}

export const HeartIcon = (props: Props) => (
  <svg
    width={70}
    height={56}
    viewBox="0 0 70 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M69.8653 18.9395C67.5617 37.6652 35.0107 56 35.0107 56C35.0107 56 2.49972 37.6652 0.15613 18.9395C-2.46669 -1.89722 28.7379 -8.38671 35.0107 14.1017C40.765 -8.55286 72.3087 -0.871017 69.8653 18.9395Z"
      fill="white"
    />
  </svg>
);