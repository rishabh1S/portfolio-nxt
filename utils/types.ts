import { Dispatch, SetStateAction } from "react";

export type StateConfig = {
  stateSetter: Dispatch<
    SetStateAction<{ name: string; email: string; goal: string }>
  >;
  nextQuestion: number | null;
};

export interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export interface Message {
  content: string;
  isUser: boolean;
}
