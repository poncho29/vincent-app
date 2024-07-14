import { MdError } from "react-icons/md";

import { Spinner } from "../common";
import { cn } from "@/utils";

interface Props {
  pageName: string;
  pageIcon: React.ReactNode;
  loader?: boolean;
  error?: boolean;
  children: React.ReactNode;
  classContent?: string;
}

export const PageContent = ({
  pageName,
  pageIcon,
  loader = false,
  error = false,
  children,
  classContent = "",
}: Props) => {
  return (
    <div className="w-full h-full flex flex-col p-4 py-6 lg:p-6">
      <div className="flex items-center gap-4 mb-6 lg:mb-10">
        <h2 className="title">
          { pageName }
        </h2>

        { pageIcon }
      </div>

      {loader && <Spinner className="mx-auto" />}

      {error && !loader && (
        <div
          className="w-full h-[calc(100vh-100px)] flex flex-col items-center gap-4
          lg:h-[calc(100vh-128px)]"
        >
          <MdError size={32} className="text-red-500 mt-20" />
          <p className="text-center text-red-500 font-semibold">
            Ha ocurrido un error al cargar la página <br />
            Por favor, recargue la página
          </p>
        </div>
      )}

      <div
        className={cn(
          'w-full h-[calc(100vh-100px)] flex flex-col items-center gap-4 lg:h-[calc(100vh-128px)]',
          classContent
        )}
      >
        { !error && !loader && children }
      </div>
    </div>
  )
}
