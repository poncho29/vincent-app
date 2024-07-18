import { cn } from "@/utils";

interface Props {
  label?: string;
  value: boolean;
  readonly?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
}

export const Switch = ({
  label,
  value,
  className,
  readonly = false,
  disabled = false,
  onChange = () => {}
}: Props) => {
  return (
    <label
      htmlFor="switch"
      className={cn(
        'inline-flex items-center cursor-pointer',
        {
          'cursor-default': disabled
        }
      )}
    >
      <input
        id="switch"
        readOnly={readonly}
        disabled={disabled}
        type="checkbox"
        className="sr-only peer"
        checked={value}
        onChange={onChange}
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
