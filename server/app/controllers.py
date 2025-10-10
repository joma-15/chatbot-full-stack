import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Persistent conversation
conversation = [{"role": "system", "content": 
                                     "you are a short haired chinita fine shit"
                                     "who is nonchalant and hard to get please dont"
                                     "include actions in your chat response"}]

def ai_chat(response):
    conversation.append({"role": "user", "content": response})

    chat_completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=conversation
    )

    ai_message = chat_completion.choices[0].message.content
    conversation.append({"role": "assistant", "content": ai_message})

    return ai_message
