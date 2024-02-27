import { FormDataType, Message } from "@/utils/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SetStateAction } from "react";

const questions = [
  "Hello! To begin, may I have your full name, please?",
  "Nice to meet you! Could you kindly provide your email address?",
  "Excellent! Is there anything specific you'd like to share or convey at this moment?",
];

const isInvalidKeyEvent = (
  event:
    | React.KeyboardEvent<HTMLInputElement>
    | React.MouseEvent<HTMLButtonElement>
): boolean =>
  event.type === "keydown" && (event as React.KeyboardEvent).key !== "Enter";

const shouldValidateEmail = (
  currentQuestion: number,
  userInputValue: string
): boolean => {
  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return currentQuestion === 1 && !isValidEmail(userInputValue);
};

const updateFormData = (
  userInputValue: string,
  stateSetter: React.Dispatch<React.SetStateAction<FormDataType>>,
  currentQuestion: number
): void => {
  stateSetter((prevData) => ({
    ...prevData,
    [currentQuestion === 0
      ? "name"
      : currentQuestion === 1
      ? "email"
      : "message"]: userInputValue,
  }));
};

const generateNewMessages = (
  userInputValue: string,
  nextQuestion: number | null,
  messages: { content: string; isUser: boolean }[],
  questions: string[],
  name: string
): Message[] => [
  ...messages,
  { content: userInputValue, isUser: true },
  {
    content:
      nextQuestion !== null
        ? questions[nextQuestion]
        : `Thank you, ${name}. Allow me some time to process it, and I will be in touch shortly.`,
    isUser: false,
  },
];

const handleNextQuestionOrRedirect = (
  nextQuestion: number | null,
  router: AppRouterInstance,
  setCurrentQuestion: {
    (value: SetStateAction<number>): void;
    (arg0: number): void;
  }
): void => {
  if (nextQuestion !== null) {
    setCurrentQuestion(nextQuestion);
  } else {
    setTimeout(() => router.push("/"), 5000);
  }
};

export {
  questions,
  shouldValidateEmail,
  updateFormData,
  generateNewMessages,
  isInvalidKeyEvent,
  handleNextQuestionOrRedirect,
};
