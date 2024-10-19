'use client';

import { useEffect, useState } from "react";

import { useAuth } from "@/context";

import { cn } from "@/utils";

import { useScreenSize } from "@/hooks";

import { LinkSidebar } from "./LinkSidebar";

import { HeaderSidebar } from "./HeaderSidebar";
import { ButtonLogout } from "./ButtonLogout";
import { ButtonMenu } from "./ButtonMenu";

import { adminMenu } from "@/assets";

import { Roles } from "@/interfaces";

export const Sidebar = () => {
  const { user } = useAuth();

  const { width } = useScreenSize();
  const isMobile = width === 0 ? false : width < 768;
  
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  useEffect(() => {
    if (width === 0) return;

    if (width < 1024) setToggleSidebar(true);
  }, [width]);

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

        <div className="grow flex flex-col gap-1 overflow-y-auto">
          {adminMenu.map((route) => {
            if (route.path === '/admin/usuarios' && !user?.roles.includes(Roles.superAdmin)) return null;

            return (
              <LinkSidebar
                route={route}
                key={route.path}
                toggleSidebar={toggleSidebar}
                onToggleSidebar={() => {
                  isMobile && setToggleSidebar(!toggleSidebar);
                }}
              />
            )
          })}
        </div>
        
        <hr className='w-full my-4' />

        <ButtonLogout toggleSidebar={toggleSidebar} />
      </div>
    </>
  )
}
