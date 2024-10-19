import { OptionSelect, Type } from "@/interfaces";

export const createTypeOptionsForSelect = (types: Type[]): OptionSelect[] => {
  return types.map((type) => ({ value: type.id, label: type.type }));
}