'use client';

import { useEffect, useState } from "react";

import { ArrowDowmIcon } from "../icons";

interface Props {
  title: string;
  text: string;
  status?: boolean;
  onChange?: (status: boolean) => void;
}

export const Accordion = ({ title, text, status = false, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(status);

  useEffect(() => {
    setIsOpen(status);
  }, [status]);

  const handleChange = () => {
    if (onChange) {
      onChange(!status);
      setIsOpen(!status);
      return;
    }

    setIsOpen(!status);
  }

  return (
    <div
      className={`
        w-full p-4 rounded-xl cursor-pointer transition-colors duration-300
        ${isOpen ? 'bg-green' : 'bg-gray'}
      `}
    >
      <div
        className="flex items-center justify-between"
        onClick={handleChange}
      >
        <p className={`paragraph font-medium ${isOpen ? '!text-white' : ''}`}>
          { title }
        </p>
        <ArrowDowmIcon
          className={`
            size-3.5 transition-all duration-300
            ${isOpen ? 'text-white rotate-180' : ''}
          `}
        />
      </div>

      <div
        className={`
          grid transition-all duration-300 overflow-hidden 
          ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}
        `}
      >
        <p className={`paragraph overflow-hidden ${isOpen ? '!text-white' : ''}`}>
          { text }
        </p>
      </div>
    </div>
  )
}
