// // import { useState, useEffect } from "react";
// import { useEffect } from "react";

import { useEffect, useState } from "react";

export function AiChat() {
  const [message, setMessage] = useState<string[]>([]);

  useEffect(() => {
    const handleClick = () => {
      const saved = localStorage.getItem("reply");
      if (saved !== null) {
        setMessage((prev) => [...prev, saved]);
      }
      console.log(saved);
    };
    window.addEventListener("localStorageUpdate", handleClick);
    return () => window.removeEventListener("localStorageUpdate", handleClick);
  }, []);

  return (
    <>
      {message.map((value) => (
        <div className="flex gap-3 text-gray-600 text-sm">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <div className="rounded-full bg-gray-100 border p-1">
              <svg
                stroke="none"
                fill="black"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846..."
                />
              </svg>
            </div>
          </span>
          <p className="leading-relaxed">
            <span className="block font-bold text-gray-700">AI </span>
            {value}
          </p>
        </div>
      ))}
    </>
  );
}

export function UserChat() {
  return (
    <>
      <div className="flex gap-3 text-gray-600 text-sm">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div className="rounded-full bg-gray-100 border p-1">
            <svg
              stroke="none"
              fill="black"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6..." />
            </svg>
          </div>
        </span>
        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">You</span>
          <span>hello</span>
        </p>
      </div>
    </>
  );
}
