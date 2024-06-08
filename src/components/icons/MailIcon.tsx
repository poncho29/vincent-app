import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGSVGElement> {}

export const MailIcon = (props: Props) => (
  <svg
    width={22}
    height={18}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.8 0H2.2C0.99 0 0.011 1.0125 0.011 2.25L0 15.75C0 16.9875 0.99 18 2.2 18H19.8C21.01 18 22 16.9875 22 15.75V2.25C22 1.0125 21.01 0 19.8 0ZM19.8 15.75H2.2V4.5L11 10.125L19.8 4.5V15.75ZM11 7.875L2.2 2.25H19.8L11 7.875Z"
      fill="white"
    />
  </svg>
);