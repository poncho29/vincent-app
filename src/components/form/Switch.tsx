import { cn } from "@/utils";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange?: () => void;
}

export const Switch = ({
  label,
  ...props
}: Props) => {
  return (
    <label
      htmlFor={props.id}
      className={cn(
        'inline-flex items-center cursor-pointer',
        {
          'cursor-default': props.disabled
        }
      )}
    >
      <input
        {...props}
        type="checkbox"
        className="sr-only peer"
      />

      <div className="relative w-11 h-6 bg-gray rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border-none after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"></div>

      { label && (
        <span className="ms-3 text-sm font-medium text-gray-900">
          { label }
        </span>
      )}
    </label>
  )
}
