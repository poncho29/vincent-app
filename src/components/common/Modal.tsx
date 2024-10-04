import { CloseXIcon } from "../icons";

interface Props {
 isOpen: boolean;
 showClose?: boolean;
 closeClass?: string;
 containerClass?: string;
 children: React.ReactNode;
 onClose?: () => void;
}

export const Modal = ({
  isOpen,
  children,
  showClose = true,
  closeClass = "top-2 right-2",
  containerClass,
  onClose
}: Props) => {
  return (
    <div
    className={`
      fixed top-0 left-0 w-full h-screen items-center justify-center p-4 z-[100] 
      bg-black/60 transition-opacity duration-300 ease-in-out 
      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}
    >
      <div
        className={`
          relative w-full h-full overflow-y-auto no-scrollbar transition-transform duration-300 ease-in-out 
          ${isOpen ? 'scale-100' : 'scale-90'}
          ${containerClass}
        `}
      >
        {showClose && (
          <button onClick={onClose}>
            <CloseXIcon className={`absolute cursor-pointer ${closeClass}`} />
          </button>
        )}

        {children}
      </div>
    </div>
  );
};