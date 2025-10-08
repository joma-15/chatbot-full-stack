import axios from "axios";
import { UserChat } from "./ChatContent";
import { useEffect, useState,useRef } from "react";


export function MessageSender() {
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>, message : string) => {
    e.preventDefault();

    try {
      const response = await axios.post('/', {
        message
      })
      console.log(response.data.message)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('an error has been occured while sending the data in axios')
      }else{
        console.log('error occured')
      }
    }
  };

  const messageRef = useRef<HTMLInputElement>(null);
  const [messageValue, setMessageValue] = useState<string>("");

  useEffect(() => {
    if(messageRef.current){
      const value = messageRef.current.value; 
      console.log(value); 
      setMessageValue(value);
    }
  },[]);

  return (
    <>
      <div className="p-4 border-t border-[#e5e7eb] bg-white">
        <form className="flex items-center space-x-2" onSubmit={(e) => handleSubmit(e,messageValue)}>
          <input
          ref={messageRef}
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message"
            defaultValue=""
            name="user-message"
          />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            id="sendBtn"
            onClick={() => <UserChat userMessage={messageValue}/>}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
