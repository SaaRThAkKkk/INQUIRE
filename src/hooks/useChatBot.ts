import { useState } from "react"
import axios from "axios"

interface Message{
    text : string,
    sender : 'user' | 'bot',
}

const useChatbot=()=>{
    const[messages,setMessages]=useState<Message[]>([]);
    const sendMessage=async(message:string)=>{
        const newMessages:Message[]=[...messages,{text:message,sender:'user'}];
        setMessages(newMessages);

        try {
            const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCfKSuR3-ULYTtFPZfNyS0mVFyIyhIgKVU",
            method: "post",
            data: { contents: [{ parts: [{ text: message }] }] },
            });
            const botMessage = response["data"]["candidates"][0]["content"]["parts"][0].text;
            setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }
    };
    return { messages, sendMessage };
};

export default useChatbot;
