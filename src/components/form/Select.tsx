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
          className="inline-block h-6 font-medium"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        className="w-full h-[42px] px-4 py-2 rounded-lg border border-sky focus:outline-sky"
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="capitalize"
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
