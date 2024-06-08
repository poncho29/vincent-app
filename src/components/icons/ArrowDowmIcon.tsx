import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGSVGElement> {}

export const ArrowDowmIcon = (props: Props) => (
  <svg
    width={8}
    height={4}
    viewBox="0 0 8 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L3.83359 2.88906C3.93436 2.95624 4.06564 2.95624 4.16641 2.88906L7 1"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);