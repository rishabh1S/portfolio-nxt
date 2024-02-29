"use client";

import { fadeInAnimationChat } from "@/utils/framer-animations";
import { Message } from "@/utils/types";
import { motion } from "framer-motion";
import React from "react";

const Messages: React.FC<Message> = ({ content, isUser }) => {
  return (
    <motion.div
      variants={fadeInAnimationChat}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={`flex items-center my-2 ${isUser ? "self-end" : "self-start"}`}
      custom={isUser}
    >
      {!isUser && (
        <div
          className={`rounded-full p-2 sm:p-3 bg-zinc-400 dark:bg-zinc-800 border-2 border-violet-700`}
        >
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </div>
      )}
      <span
        className={`p-2.5 sm:p-3.5 text-base sm:text-xl ${
          isUser
            ? "bg-zinc-300 dark:bg-zinc-600 rounded-l-full rounded-br-full"
            : ""
        }`}
      >
        {content}
      </span>
    </motion.div>
  );
};

export default Messages;
