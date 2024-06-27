'use client';

import { useState } from "react";

import { ArrowDowmIcon } from "../icons";

interface Props {
  title: string;
  text: string;
}

export const Accordion = ({ title, text }: Props) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="w-full p-4 rounded-xl bg-gray cursor-pointer"
    >
      <div
        className="flex items-center justify-between"
        onClick={() => setShowText(!showText)}
      >
        <p className="paragraph font-medium">
          { title }
        </p>
        <ArrowDowmIcon
          className={`size-3.5 transition-all duration-300 ${showText ? 'rotate-180' : ''}`}
        />
      </div>

      <div
        className={`
          grid transition-all duration-300 overflow-hidden 
          ${showText ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}
        `}
      >
        <p className='paragraph overflow-hidden'>
          { text }
        </p>
      </div>
    </div>
  )
}
