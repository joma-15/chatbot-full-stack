import { ChatHeader } from "./ChatHeader";
import { MessageSender } from "./MessageSender";
import { AiChat } from "./ChatContent";
import { useState, useEffect, use } from "react";

export function ChatBox() {
  //grap ai response from the local storage
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("reply"); 
    return saved ? JSON.parse(saved): [];
  });

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(messages))
  },[messages]);
  
  const[newMessage, setNewMessage] = useState("");
  const setMessage = () => {
    const reply = JSON.parse(localStorage.getItem("reply") || ""); 

    reply.array.forEach((message: string) => {
      setNewMessage(message)
    });
    setMessage();
    
  }
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
          
        </div>

        {/* Input */}
        <MessageSender />
      </div>
    </>
  );
}
