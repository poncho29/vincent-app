import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGSVGElement> {}

export const ArrowBackIcon = (props: Props) => (
  <svg
    width={12}
    height={20}
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 1L1 10L11 19"
      stroke="#919193"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
