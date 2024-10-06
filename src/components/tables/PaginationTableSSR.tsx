'use client';

import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";

interface Props {
  page: number;
  totalPages: number;
}

export const PaginationTableSSR = ({ page, totalPages }: Props) => {
  return (
    <div className="w-full flex items-center justify-center gap-2 px-6 py-4">
      <div className='flex gap-1 text-blackLight'>
        <div className="flex items-center justify-between gap-1 cursor-default sm:min-w-24 sm:mr-3">
          <span className="hidden font-semibold sm:block">Página</span>
          <strong className="">
            { page } de { totalPages }
          </strong>
        </div>

        <button
          disabled={page === 1}
          className={`rounded border p-1 cursor-pointer bg-white ${page === 1 && 'border-slate-200 opacity-50'}`}
          onClick={() => {}}
        >
          <MdKeyboardDoubleArrowLeft
            size={20}
            color={`${page === 1 ? '#ccc' : '#000'}`}
          />
        </button>
        <button
          disabled={page === 1}
          className={`rounded border p-1 cursor-pointer bg-white ${page === 1 && 'border-slate-200 opacity-50'}`}
          onClick={() => {}}
        >
          <MdKeyboardArrowLeft
            size={20}
            color={`${page === 1 ? '#ccc' : '#000'}`}  
          />
        </button>
        <button
          disabled={page === totalPages}
          className={`rounded border p-1 cursor-pointer bg-white ${page === totalPages && 'border-slate-200 opacity-50'}`}
          onClick={() => {}}
        >
          <MdOutlineKeyboardArrowRight
            size={20}
            color={`${page === totalPages ? '#ccc' : '#000'}`}
          />
        </button>
        <button
          disabled={page === totalPages}
          className={`rounded border p-1 cursor-pointer bg-white ${page === totalPages && 'border-slate-200 opacity-50'}`}
          onClick={() => {}}
        >
          <MdOutlineKeyboardDoubleArrowRight
            size={20}
            color={`${page === totalPages ? '#ccc' : '#000'}`}
          />
        </button>
      </div>
    </div>
  )
}
