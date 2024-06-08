import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGSVGElement> {}

export const CloseXIcon = (props: Props) => (
  <svg
    width={16}
    height={15}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 1L1 14"
      stroke="#85C8CB"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M1.5 1L14.5 14"
      stroke="#85C8CB"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);