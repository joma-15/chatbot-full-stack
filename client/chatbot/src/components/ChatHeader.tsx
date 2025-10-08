export function ChatHeader(){
    return(
        <div className="flex flex-col space-y-1.5 p-6 pb-3 border-b border-[#e5e7eb]">
          <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
          <p className="text-sm text-[#6b7280] leading-3">
            Powered by Meta-Llama 3.1
          </p>
        </div>
    )
}