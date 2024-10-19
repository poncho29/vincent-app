import { OptionSelect, Stage } from "@/interfaces";

export const createStageOptionsForSelect = (stages: Stage[]): OptionSelect[] => {
  return stages.map((stage) => ({
    label: stage.stage,
    value: stage.id
  }))
}