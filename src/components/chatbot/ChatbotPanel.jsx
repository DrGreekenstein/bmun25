"use client";

import React, { forwardRef, use, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaRegPaperPlane } from "react-icons/fa";
import axios from "axios";

const ChatbotPanel = forwardRef(({ isLoaded }, ref) => {
  const [geminiPrompt, setGeminiPrompt] = useState("");
  const [geminiPromptAndResArray, setGeminiPromptAndResArray] = useState([]);

  const [submitting, setSubmitting] = useState(false);

  const chatBotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const handleGeminiPrompt = (e) => {
    setGeminiPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    const currentPrompt = geminiPrompt;
    setGeminiPrompt("");

    setGeminiPromptAndResArray((prev) => [...prev, geminiPrompt]);
    setSubmitting(true);
    try {
      const res = await axios.post("/api/chatbot-endpoint", {
        prompt: currentPrompt,
      });
      setGeminiPromptAndResArray((prev) => [...prev, res.data.response]);
    } catch (error) {
      console.error("Failed to get Gemini response:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          ref={ref}
          className="fixed bottom-6 right-6 z-[100] h-[80vh] w-[30vw] min-w-[260px] bg-gray-900 text-white flex flex-col rounded-xl shadow-2xl overflow-hidden border border-gray-700"
          variants={chatBotVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-gray-800 px-4 py-3 text-lg font-semibold text-center">
            BoscoMUN assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2 text-sm bg-gray-900">
            <div className="self-start bg-gray-700 px-3 py-2 rounded-md max-w-[80%]">
              Hi! How can I help you today?
            </div>

            {geminiPromptAndResArray.map((curr, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "self-end bg-blue-500"
                    : "self-start bg-gray-700"
                } px-3 py-2 rounded-md max-w-[80%]`}
              >
                {curr}
              </div>
            ))}

            {submitting && (
              <div className="self-start flex gap-1 items-center px-3 py-2 max-w-[80%]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <motion.span
                    key={index}
                    className="h-2 w-2 rounded-full bg-white"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-3 bg-gray-800 flex gap-2 items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!submitting && geminiPrompt.trim() !== "") {
                  handleSubmit();
                }
              }}
              className="p-3 bg-gray-800 flex gap-2 items-center w-full"
            >
              <input
                type="text"
                required
                onChange={handleGeminiPrompt}
                value={geminiPrompt}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-gray-700 rounded-md placeholder-gray-400 text-white outline-none"
              />
              <button
                type="submit"
                disabled={submitting || geminiPrompt.trim() === ""}
                className="bg-blue-600 px-5 py-3 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                <FaRegPaperPlane />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ChatbotPanel;
