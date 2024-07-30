import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  msgError?: string | undefined;
  touched?: boolean | undefined;
  showPassword?: boolean;
  inputClass?: string;
  onShowPassword?: () => void;
}

export const Input = ({
  label,
  msgError = '',
  touched = false,
  showPassword = false,
  inputClass = 'border-none',
  onShowPassword = () => {},
  ...props
}: Props) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id}
          className="flex items-center justify-between font-medium"
        >
          {label}

          {(props.type === 'password' || (props.type === 'text' && showPassword)) && (
            <span
              className="text-xs text-gray-500 cursor-pointer select-none"
              onClick={onShowPassword}
            >
              {!showPassword ? 'Mostrar' : 'Ocultar'} contraseña
            </span>
          )}
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
