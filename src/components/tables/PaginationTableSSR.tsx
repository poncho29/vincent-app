'use client';

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";

interface Props {
  totalPages: number;
}

export const PaginationTableSSR = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === 0) return pathname;

    if (pageNumber === 0 || pageNumber === 1) return pathname;
    
    if (pageNumber > totalPages) return `${pathname}?${params.toString()}`;

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="w-full flex items-center justify-center gap-2 px-6 py-4">
      <div className='flex gap-1 text-blackLight'>
        <div className="flex items-center justify-between gap-1 cursor-default sm:min-w-24 sm:mr-3">
          <span className="hidden font-semibold sm:block">Página</span>
          <strong className="">
            { currentPage } de { totalPages }
          </strong>
        </div>

        <Link
          href={createPageUrl(1)}
          className={`rounded border p-1 cursor-pointer bg-white ${currentPage === 1 && 'border-slate-200 opacity-50'}`}
        >
          <MdKeyboardDoubleArrowLeft
            size={20}
            color={`${currentPage === 1 ? '#ccc' : '#000'}`}
          />
        </Link>
        <Link
          href={createPageUrl(currentPage - 1)}
          className={`rounded border p-1 cursor-pointer bg-white ${currentPage === 1 && 'border-slate-200 opacity-50'}`}
        >
          <MdKeyboardArrowLeft
            size={20}
            color={`${currentPage === 1 ? '#ccc' : '#000'}`}  
          />
        </Link>
        <Link
          href={createPageUrl(currentPage + 1)}
          className={`rounded border p-1 cursor-pointer bg-white ${currentPage === totalPages && 'border-slate-200 opacity-50'}`}
        >
          <MdOutlineKeyboardArrowRight
            size={20}
            color={`${currentPage === totalPages ? '#ccc' : '#000'}`}
          />
        </Link>
        <Link
          href={createPageUrl(totalPages)}
          className={`rounded border p-1 cursor-pointer bg-white ${currentPage === totalPages && 'border-slate-200 opacity-50'}`}
        >
          <MdOutlineKeyboardDoubleArrowRight
            size={20}
            color={`${currentPage === totalPages ? '#ccc' : '#000'}`}
          />
        </Link>
      </div>
    </div>
  )
}
