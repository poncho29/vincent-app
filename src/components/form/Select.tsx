import type { InputHTMLAttributes } from "react";

import { OptionSelect } from "@/interfaces";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  msgError?: string | undefined;
  touched?: boolean | undefined;
  options: OptionSelect[];
}

export const Select = ({
  label,
  msgError = '',
  touched = false,
  options = [],
  ...props
}: Props) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id}
          className="font-medium"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        className="w-full px-4 py-2 rounded-lg border border-sky focus:outline-sky"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {touched && msgError && (
        <span className="text-xs text-rose-500">{msgError}</span>
      )}
    </div>
  )
}
