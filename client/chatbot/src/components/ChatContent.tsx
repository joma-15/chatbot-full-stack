import { useEffect, useState } from "react";

function grabMessage(item: string) {
  const [message, setMessage] = useState<string[]>([]);

  useEffect(() => {
    const handleClick = () => {
      const saved = localStorage.getItem(item);
      if (saved !== null) {
        setMessage((prev) => [...prev, saved]);
      }
      console.log(saved);
    };
    window.addEventListener("localStorageUpdate", handleClick);
    return () => window.removeEventListener("localStorageUpdate", handleClick);
  }, []);
  return message;
}

export function AiChat({ visible }: { visible: boolean }) {
  const message = grabMessage("reply");

  if (visible) {//add comment
    return (
      <>
        {message.map((value) => (
          <div className="flex gap-3 text-gray-600 text-sm">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <div className="text-[20px]">👩‍🦰</div>
            </span>
            <p className="leading-relaxed">
              <span className="block font-bold text-gray-700">Fine shit</span>
              {value}
            </p>
          </div>
        ))}
      </>
    );
  }
  return null;
}

export function UserChat({ visible }: { visible: boolean }) {
  const message = grabMessage("message");

  if (visible) {
    return (
      <>
        {message.map((value) => (
          <div className="flex gap-3 text-gray-600 text-sm">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <div className="text-[20px]">🧔‍♂️</div>
            </span>
            <p className="leading-relaxed">
              <span className="block font-bold text-gray-700">Bro</span>
              <span>{value}</span>
            </p>
          </div>
        ))}
      </>
    );
  }

  return null;
}
