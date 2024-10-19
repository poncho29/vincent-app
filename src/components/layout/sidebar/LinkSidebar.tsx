'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/utils";

import { IAdminMenu } from "@/interfaces";

interface Props {
  route: IAdminMenu;
  toggleSidebar: boolean;
  onToggleSidebar: () => void;
}

export const LinkSidebar = ({ route, toggleSidebar, onToggleSidebar }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      key={route.path}
      href={route.path}
      className={cn(
        'flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-sky',
        {
          'font-bold bg-sky': pathname.includes(route.path)
        }
      )}
      onClick={onToggleSidebar}
    >
      <span
        className={`transition-all duration-300 ${toggleSidebar ? 'hidden' : 'block'}`}
      >
        { route.name }
      </span>

      { route.icon }
    </Link>
  )
}