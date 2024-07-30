import { OptionSelect, Size } from "@/interfaces";

export const createSizeOptionsForSelect = (sizes: Size[]): OptionSelect[] => {
  return sizes.map((size) => ({ value: size.id, label: size.size }));
}