'use client';

import { useMemo, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useScreenSize } from "@/hooks";

import { ArrowDowmIcon } from "../icons";

import { IMenu, ISubMenu } from "@/interfaces/components";

const classLink = `text-nowrap font-semibold leading-[19.5px] transition-colors duration-200
lg:font-medium xl:text-lg xl:leading-[21.94px] hover:text-green hover:underline`;

interface Props {
  route: IMenu;
  onClick: () => void;
}

export const ItemMenu = ({ route: { label, path, children }, onClick } : Props) => {
  const pathname = usePathname();

  const [showSubmenu, setShowSubmenu] = useState(false);

  const { width } = useScreenSize();

  const hasChildren = useMemo(() => children && children.length > 0, [children]);

  const handleShowSubmenu = (statusMenu: boolean) => {
    if (width < 1024 || !hasChildren) return;

    setShowSubmenu(statusMenu);
  }

  return (
    <li
      key={label}
      className={`relative`}
      onMouseEnter={() => handleShowSubmenu(true)}
      onMouseLeave={() => handleShowSubmenu(false)}
    >
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
              className={`trasition-all duration-200  ${showSubmenu ? 'rotate-180' : 'rotate-0'}`}
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
      
      <div
        className={`
          w-full grid justify-items-center transition-all duration-200
          lg:absolute lg:-left-[60px] lg:w-[200px] lg:rounded-xl lg:shadow-lg lg:py-4
          ${showSubmenu ? 'grid-rows-[1fr] opacity-100 pt-2' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <ul className="overflow-hidden">
          {children && children.map(({ label, path }: ISubMenu) => (
            <li
              key={label}
              className="text-center transition-colors duration-200 hover:text-green
              lg:mt-2 lg:first:mt-0"
            >
              <Link href={path} onClick={onClick}>
                { label }
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
