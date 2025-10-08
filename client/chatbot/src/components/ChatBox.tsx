import { ChatHeader } from "./ChatHeader";
import { AiChat, UserChat } from "./ChatContent";
import { MessageSender } from "./MessageSender";

export function ChatBox() {
  return (
    <>
      {/* Chat window */}
      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className="fixed left-1/2 bottom-[calc(4rem+1.5rem)] transform -translate-x-1/2 bg-white rounded-lg border border-[#e5e7eb] w-[440px] h-[570px] flex flex-col"
      >
        {/* Heading */}
        <ChatHeader />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AiChat />
          <UserChat />
          <AiChat />
        </div>

        {/* Input */}
        <MessageSender />
      </div>
    </>
  );
}
