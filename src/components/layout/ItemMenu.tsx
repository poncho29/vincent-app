'use client';

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowDowmIcon } from "../icons";

import { IMenu, ISubMenu } from "@/interfaces/components";

const classLink = `text-nowrap font-semibold leading-[19.5px] transition-colors duration-200
lg:font-mediumxl:text-lg xl:leading-[21.94px] hover:text-green hover:underline`;

interface Props {
  route: IMenu;
  onClick: () => void;
}

export const ItemMenu = ({ route, onClick } : Props) => {
  const pathname = usePathname();

  const [showSubmenu, setShowSubmenu] = useState(false);

  const { label, path, children } = route;
  const hasChildren = children && children.length > 0;

  return (
    <li key={label}>
      { hasChildren ? (
        <span
          className={`
            flex items-center justify-center gap-2 cursor-pointer
            ${classLink} ${pathname.includes(path) ? 'text-green underline' : ''}
          `}
          onClick={() => setShowSubmenu(!showSubmenu)}
        >
          { label }

          { hasChildren ? (
            <ArrowDowmIcon
              className={` trasition-all duration-200  ${showSubmenu ? 'rotate-180' : 'rotate-0'}`}
            />
          ) : null }
        </span>
      ) : (
        <Link
          href={path}
          onClick={onClick}
          className={`${classLink} ${pathname === path ? 'text-green underline' : ''}`}
        >
          { label }
        </Link>
      )}
      
      <ul
        className={`
          grid justify-items-center gap-y-2 transition-all duration-200 overflow-hidden
          ${showSubmenu ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        {hasChildren && children.map(({ label, path }: ISubMenu) => (
          <li key={label} className="overflow-hidden">
            <Link href={path}>
              { label }
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
