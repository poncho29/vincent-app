'use client';

import { useState } from "react";

import { cn } from "@/utils";

import { useScreenSize } from "@/hooks";

import { LinkSidebar } from "./LinkSidebar";

import { HeaderSidebar } from "./HeaderSidebar";
import { ButtonLogout } from "./ButtonLogout";
import { ButtonMenu } from "./ButtonMenu";

import { adminMenu } from "@/assets";

export const Sidebar = () => {
  const { width } = useScreenSize();
  const isMobile = width < 768;

  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <>
      {isMobile && (
        <ButtonMenu
          isMobile={isMobile}
          onToggleSidebar={() => setToggleSidebar(!toggleSidebar)}
        />
      )}

      <div
        className={cn(
          'h-screen flex flex-col bg-slate-300 transition-all duration-300',
          {
            'w-16 p-3': !isMobile && toggleSidebar,
            'w-72 p-4':  !isMobile && !toggleSidebar,
            'absolute w-full p-4 z-50 md:w-72': isMobile,
            'translate-x-0': isMobile && !toggleSidebar,
            '-translate-x-[110%]': isMobile && toggleSidebar,
          }
        )}
      >
        <HeaderSidebar
          toggleSidebar={toggleSidebar}
          onToggleSidebar={() => setToggleSidebar(!toggleSidebar)}
        />

        <hr className='w-full my-4' />

        <div className="grow flex flex-col gap-1">
          {adminMenu.map((route) => (
            <LinkSidebar
              route={route}
              key={route.path}
              toggleSidebar={toggleSidebar}
              onToggleSidebar={() => {
                isMobile && setToggleSidebar(!toggleSidebar);
              }}
            />
          ))}
        </div>
        
        <hr className='w-full my-4' />

        <ButtonLogout toggleSidebar={toggleSidebar} />
      </div>
    </>
  )
}
