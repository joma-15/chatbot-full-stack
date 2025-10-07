import os
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()


import os
from groq import Groq
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def talk_to_ai():
    client = Groq(
        api_key=os.getenv("GROQ_API_KEY")
    )

    # 👇 Start with a system message
    conversation = [
        {"role": "system", "content": "You are a helpful assistant."}
    ]

    while True:
        # Get user input
        message = input("Me: ")

        # Exit condition
        if message.lower() in {"exit", "quit"}:
            print("Goodbye 👋")
            break

        # Add user message to the conversation
        conversation.append({"role": "user", "content": message})

        # Send the full conversation each time
        chat_completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=conversation
        )

        # Get AI reply
        ai_message = chat_completion.choices[0].message.content
        # print("AI:", ai_message)

        # Add AI reply back to conversation
        conversation.append({"role": "assistant", "content": ai_message})
        return ai_message
