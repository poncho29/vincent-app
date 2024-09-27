import { MdError } from "react-icons/md";

import { Spinner } from "../common";
import { cn } from "@/utils";

interface Props {
  pageName: string;
  pageIcon: React.ReactNode;
  loader?: boolean;
  error?: boolean;
  children: React.ReactNode;
}

export const PageContent = ({
  pageName,
  pageIcon,
  loader = false,
  error = false,
  children
}: Props) => {
  return (
    <div
      className="w-full h-screen overflow-y-auto"
    >
      <div className="sticky top-0 z-40 w-full flex items-center gap-2 p-5 bg-slate-300">
        { pageIcon }

        <h2 className="font-mochiypopone text-xl">
          { pageName }
        </h2>
      </div>

      <div
        className={cn(
          'w-full h-auto p-4',
          {
            'flex justify-center mt-20': loader,
            'flex flex-col items-center justify-center gap-5 mt-20': error && !loader,
          }
        )}
      >
        {loader && <Spinner className="mx-auto" />}

        {error && !loader && (
          <>
            <MdError size={32} className="text-red-500" />
            <p className="text-center text-red-500 font-semibold">
              Ha ocurrido un error al cargar la página <br />
              Por favor, recargue la página
            </p>
          </>
        )}

        {!error && !loader && children && (
          <>{children}</>
        )}
      </div>
    </div>
  )
}
