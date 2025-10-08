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
        <div className="flex flex-col space-y-1.5 p-6 pb-3 border-b border-[#e5e7eb]">
          <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
          <p className="text-sm text-[#6b7280] leading-3">
            Powered by Meta-Llama 3.1
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Message 1 (AI) */}
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
              <span className="block font-bold text-gray-700">AI </span>Hi, how
              can I help you today?
            </p>
          </div>

          {/* Message 2 (User) */}
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
              <span className="block font-bold text-gray-700">You </span>fewafef
            </p>
          </div>

          {/* Message 3 (AI) */}
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
              <span className="block font-bold text-gray-700">AI </span>Sorry, I
              couldn't find any information...
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#e5e7eb] bg-white">
          <form className="flex items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              defaultValue=""
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
