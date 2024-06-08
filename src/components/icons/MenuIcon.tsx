import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGSVGElement> {}

export const MenuIcon = (props: Props) => (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.38889 1H1V8H8.38889V1Z"
      stroke="#85C8CB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 1H12.6111V8H20V1Z"
      stroke="#85C8CB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12H12.6111V19H20V12Z"
      stroke="#85C8CB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.38889 12H1V19H8.38889V12Z"
      stroke="#85C8CB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
