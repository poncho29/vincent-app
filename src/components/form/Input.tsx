import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  msgError?: string | undefined;
  touched?: boolean | undefined;
  inputClass?: string;
}

export const Input = ({
  label,
  msgError = '',
  touched = false,
  inputClass = 'border-none',
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

      <input
        {...props}
        className={`w-full px-4 py-2 rounded-lg focus:outline-sky ${inputClass}`}
      />

      {touched && msgError && (
        <span className="text-xs text-rose-500">{msgError}</span>
      )}
    </div>
  )
}
