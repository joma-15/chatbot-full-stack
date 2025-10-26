import { useState, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageSender } from "./MessageSender";
import { UserChat, AiChat } from "./ChatContent";

export function ChatBox() {
  const [userVisible, setUserVisible] = useState(false);
  const [aiVisible, setAiVisible] = useState(false);

  useEffect(() => {
    // 1️⃣ Show user message immediately
    setUserVisible(true);

    // 2️⃣ Show AI message after 2 seconds
    const timer = setTimeout(() => {
      setAiVisible(true);
    }, 5000);

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
      className="fixed left-1/2 bottom-[calc(4rem+1.5rem)] transform -translate-x-1/2 bg-white rounded-lg border border-[#e5e7eb] w-[440px] h-[570px] flex flex-col"
    >
      <ChatHeader />

      {/* Messages section */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <UserChat visible={userVisible} />
        <AiChat visible={aiVisible} />
      </div>

      <MessageSender />
    </div>
  );
}
