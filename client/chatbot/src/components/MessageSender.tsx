import axios from "axios";
import { useRef } from "react";


export function MessageSender() {
  const messageRef = useRef<HTMLInputElement>(null);
  // const [message, setMessage] = useState("");

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage = messageRef.current?.value || "";
    // setMessage(userMessage);

    try {
      const response = await axios.post('http://127.0.0.1:5000/', {
        message: userMessage
      })
      const ai = response.data.reply;
      localStorage.setItem("reply",ai);
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('an error has been occured while sending the data in axios')
      }else{
        console.log('error occured')
      }
    }
  };

  return (
    <>
      <div className="p-4 border-t border-[#e5e7eb] bg-white">
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
          <input
          ref={messageRef}
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message"
            defaultValue=""
            name="user-message"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            id="sendBtn"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
