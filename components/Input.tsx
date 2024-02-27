import React, { LegacyRef } from "react";
import { IoMdArrowForward } from "react-icons/io";

interface InputProps {
  userInputRef: LegacyRef<HTMLInputElement> | undefined;
  handleInputAction: (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  userInputRef,
  handleInputAction,
  placeholder,
}) => {
  return (
    <div className="sm:pl-20 pl-2 fixed w-full bottom-0 flex items-center border-t border-zinc-300 dark:border-zinc-700">
      <input
        ref={userInputRef}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleInputAction}
        className="flex-1 py-5 px-2 bg-transparent backdrop-blur-3xl focus:outline-none"
      />
      <button onClick={handleInputAction} className="p-5 hover:bg-violet-700">
        <IoMdArrowForward size={24} />
      </button>
    </div>
  );
};

export default Input;
