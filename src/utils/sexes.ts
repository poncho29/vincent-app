import { OptionSelect, Sex } from "@/interfaces";

export const createSexOptionsForSelect = (sexes: Sex[]): OptionSelect[] => {
  return sexes.map((sex) => ({ value: sex.id, label: sex.sex }));
}