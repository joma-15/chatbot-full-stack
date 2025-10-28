import { ChatHeader } from "./ChatHeader";
import { MessageSender } from "./MessageSender";
import { UserChat, AiChat } from "./ChatContent";
import { useEffect, useState } from "react";

export function ChatBox() {
  const [Show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleMessageUpdate = () => {
      setShow(false); // reset visibility when new message arrives

      // wait 10 seconds before showing AiChat again
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);

      return () => clearTimeout(timer);
    };

    // listen for the same custom event from your grabMessage() logic
    window.addEventListener("localStorageUpdate", handleMessageUpdate);

    // cleanup
    return () => window.removeEventListener("localStorageUpdate", handleMessageUpdate);
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
        <UserChat visible={true} />
        <AiChat visible={Show} />
      </div>

      <MessageSender />
    </div>
  );
}
