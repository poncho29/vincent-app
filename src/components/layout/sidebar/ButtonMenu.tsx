import { ButtonHTMLAttributes } from "react";

import { IoReorderThree } from "react-icons/io5";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  isMobile?: boolean;
  onToggleSidebar: () => void;
}

export const ButtonMenu = ({ isMobile = false, onToggleSidebar }: Props) => {
  return (
    <button
      className={`
        p-2 rounded-md bg-sky hover:bg-skyLight ${isMobile ? 'absolute top-4 right-4' : ''}
      `}
      onClick={onToggleSidebar}
    >
      <IoReorderThree size={24} />
    </button>
  )
}
