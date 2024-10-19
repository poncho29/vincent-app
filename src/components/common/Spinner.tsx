import { cn } from "@/utils";

interface Props {
  className?: string;
}

export const Spinner = ({ className }: Props) => {
  return (
    <div
      role="status"
      aria-label="loading"
      className={cn(
        'w-10 h-10 animate-spin inline-block border-[3px] border-green',
        'border-t-transparent text-gray-800 rounded-full dark:text-white',
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
