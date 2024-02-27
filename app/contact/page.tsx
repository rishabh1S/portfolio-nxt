"use client";

import { Input, Messages } from "@/components";
import { FormDataType, Message } from "@/utils/types";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  generateNewMessages,
  handleNextQuestionOrRedirect,
  isInvalidKeyEvent,
  questions,
  shouldValidateEmail,
  updateFormData,
} from "./methods";

export default function Contact() {
  const router = useRouter();
  const userInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [placeholderMessage, setPlaceholderMessage] = useState<string>(
    "Type your message..."
  );

  useEffect(() => {
    setMessages([{ content: questions[currentQuestion], isUser: false }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputAction = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (isInvalidKeyEvent(event)) {
      return;
    }

    const userInputValue = userInputRef.current?.value!;

    if (shouldValidateEmail(currentQuestion, userInputValue)) {
      userInputRef.current!.value = "";
      setPlaceholderMessage("Wrong Input");
      setTimeout(() => {
        setPlaceholderMessage("Type your message...");
      }, 3000);
      return;
    }

    const newState: Record<
      number,
      {
        stateSetter: Dispatch<SetStateAction<FormDataType>>;
        nextQuestion: number | null;
      }
    > = {
      0: { stateSetter: setFormData, nextQuestion: 1 },
      1: { stateSetter: setFormData, nextQuestion: 2 },
      2: { stateSetter: setFormData, nextQuestion: null },
    };

    const { stateSetter, nextQuestion } = newState[currentQuestion];
    updateFormData(userInputValue, stateSetter, currentQuestion);

    const newMessages = generateNewMessages(
      userInputValue,
      nextQuestion,
      messages,
      questions,
      name
    );
    setMessages(newMessages);
    handleNextQuestionOrRedirect(nextQuestion, router, setCurrentQuestion);
    userInputRef.current!.value = "";
  };

  useEffect(() => {
    const sendEmail = () => {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error(
          "Error: One or more environment variables are undefined."
        );
        return;
      }

      const templateParams = {
        name,
        email,
        message,
      };
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
    };

    if (message.trim() !== "") {
      sendEmail();
    }
  }, [message, name, email]);

  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <div className="flex flex-col">
        <div className="flex flex-col items-end py-16 sm:px-48 px-2">
          {messages.map(({ content, isUser }, index) => (
            <Messages key={index} content={content} isUser={isUser} />
          ))}
        </div>
        <Input
          userInputRef={userInputRef}
          handleInputAction={handleInputAction}
          placeholder={placeholderMessage}
        />
      </div>
    </div>
  );
}
