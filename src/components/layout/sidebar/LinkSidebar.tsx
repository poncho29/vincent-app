'use client';

import Link from "next/link";

import { IRoute } from "@/interfaces";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

interface Props {
  route: IRoute;
}

export const LinkSidebar = ({ route }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      key={route.path}
      href={route.path}
      className={cn(
        'flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-sky',
        {
          'font-bold bg-sky': pathname === route.path
        }
      )}
    >
      <span>
        { route.name }
      </span>

      { route.icon }
    </Link>
  )
}