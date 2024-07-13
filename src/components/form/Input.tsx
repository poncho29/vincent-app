import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  msgError: string | undefined;
  touched: boolean | undefined;
}

export const Input = ({label, msgError = '', touched = false, ...props}: Props) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={props.id}>
          {label}
        </label>
      )}

      <input
        {...props}
        className="w-full px-4 py-2 border-none rounded-lg focus:outline-sky"  
      />

      {touched && msgError && (
        <span className="text-xs text-rose-500">{msgError}</span>
      )}
    </div>
  )
}
