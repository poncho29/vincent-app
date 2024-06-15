'use client';

import { useEffect, useRef, useState } from "react";

import { useScreenSize } from "@/hooks";

import { ItemMenu } from "./ItemMenu";

import { CloseXIcon, MenuIcon } from "../icons";

import { menuRoutes } from "@/assets";

export const Menu = () => {
  const menuRef = useRef<HTMLElement>(null);

  const [toogleMenu, setToogleMenu] = useState(false);

  const { width } = useScreenSize();

  useEffect(() => {
    if (width < 1024) return;

    setToogleMenu(false);
  }, [width]);

  useEffect(() => {
    if (!toogleMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToogleMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toogleMenu]);

  const handleToogleMenu = () => {
    if (width >= 1024) return;

    setToogleMenu(!toogleMenu);
  }

  return (
    <div
      className={`
        transition-all duration-500 ease-in-out
        ${toogleMenu ? 'absolute top-0 left-0 w-full h-screen bg-white/60 ' : 'w-auto h-auto'}
      `}
    >
      <nav
        ref={menuRef}
        className={`
          fixed top-[25px] left-1/2 -translate-x-1/2 z-50 w-[325px] p-4 rounded-xl shadow-md bg-white
          transition-transform duration-500 ease-in-out ${toogleMenu ? 'translate-y-0' : '-translate-y-[110%]'}
          lg:relative lg:top-auto lg:left-auto lg:transform-none lg:w-auto lg:rounded-none lg:shadow-none lg:px-0
        `}
      >
        <ul
          className="flex flex-col items-center gap-y-[25px] lg:flex-row lg:justify-between lg:gap-x-8"
        >
          <CloseXIcon
            className="cursor-pointer lg:hidden"
            onClick={handleToogleMenu}
          />

          {menuRoutes.map((menu) => (
            <ItemMenu
              key={menu.label}
              route={menu}
              onClick={handleToogleMenu}
            />
          ))}
        </ul>
      </nav>

      <MenuIcon
        className={`cursor-pointer lg:hidden ${toogleMenu ? 'absolute top-6 right-6' : ''}`}
        onClick={handleToogleMenu}
      />
    </div>
  )
}
