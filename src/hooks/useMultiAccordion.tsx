'use client';

import { useState } from "react";

import { IAccordion } from "@/interfaces";

interface Props {
  initialQuestions: IAccordion[];
}

export const useMultiAccordion = ({ initialQuestions = [] }: Props) => {
  const [questions, setQuestions] = useState(initialQuestions);

  const handleChangeAccordion = (id: number) => {
    const newQuestions = questions.map(q => {
      if (q.id === id) {
        return { ...q, status: !q.status }
      }

      return { ...q, status: false }
    });

    setQuestions(newQuestions);
  }

  return { questions, handleChangeAccordion };
}
