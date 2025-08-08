💬 AI Chatbot App
A responsive and interactive AI-powered chatbot built with React, Vite, Axios, and integrated with Google Gemini API. This app allows users to communicate with an AI assistant in real time.

🚀 Features
⚡ Fast bundling and development with Vite

🤖 AI interaction using Gemini API

🌐 Real-time chat interface with dynamic response handling

🧠 Maintains message history and differentiates user/bot messages

🎨 Styled with Tailwind CSS for a modern, clean UI

🛠️ Tech Stack
React – Frontend library

Vite – Build tool for fast performance

Axios – For making HTTP requests

Gemini API – Google’s large language model for AI responses

TypeScript – (Optional) for static type checking

Tailwind CSS – Utility-first CSS framework for styling



📁 Project Structure
src/
│
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks (e.g., useChatbot)
├── App.tsx             # Main App component
├── main.tsx            # Vite entry point
└── index.css           # Global styles (Tailwind CSS)



⚙️ Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/chatbot-gemini-app.git
cd chatbot-gemini-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env file in the root directory:

ini
Copy
Edit
VITE_GEMINI_API_KEY=your_api_key_here
🔒 Never expose your API key in frontend code directly. Use environment variables.

4. Start Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser to see the app in action.

📦 Build for Production
bash
Copy
Edit
npm run build


🧠 How It Works
User enters a prompt into the input field.

The prompt is sent to Gemini API using Axios.

The response is parsed and displayed in the chat window.

All messages are stored in the component state.
