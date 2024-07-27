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
    <div
      className="w-full flex flex-col"
    >
      <div className="sticky top-0 z-40 w-full flex items-center gap-2 p-5 bg-slate-300 md:static">
        { pageIcon }

        <h2 className="font-mochiypopone text-xl">
          { pageName }
        </h2>
      </div>

      {loader && <Spinner className="mx-auto" />}

      {error && !loader && (
        <div
          className="w-full flex flex-col items-center gap-4 mt-20"
        >
          <MdError size={32} className="text-red-500" />
          <p className="text-center text-red-500 font-semibold">
            Ha ocurrido un error al cargar la página <br />
            Por favor, recargue la página
          </p>
        </div>
      )}

      {!error && !loader && children && (
        <div
          className={cn(
            'w-full flex flex-col items-center p-4',
            classContent
          )}
        >
          { children }
        </div>
      )}
    </div>
  )
}
