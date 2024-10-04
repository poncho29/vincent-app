import { ToasterProps } from "react-hot-toast";
import toast from 'react-hot-toast';

interface Props {
  textOk: string;
  textCancel: string;
  toast: ToasterProps;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ModalToast = ({
  textOk,
  textCancel,
  toast,
  onConfirm,
  onCancel
}: Props) => {

  return (
    <div className="flex flex-col gap-2">
      <button onClick={onConfirm}>
        {textOk}
      </button>
      <button onClick={onCancel}>
        {textCancel}
      </button>
    </div>
  )
}
