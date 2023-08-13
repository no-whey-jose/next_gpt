import Head from "next/head";
import { ChatSideBar } from "../../components/ChatSideBar";
import {useState} from "react";

export default function ChatPage() {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('userInput', userInput)
  }
  return (
    <>
      <Head>Start A Chat</Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSideBar />
        <div className="flex flex-col bg-gray-700">
          <div className="flex-1"> chat window</div>
          <footer className="bg-gray-800 p-10">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-red-500 focus:bg-gray-600 focus:outline focus:outline-red-500"
                  placeholder="Strike up a conversation..."
                  value={userInput}
                  onChange={(e) => setUserInput((e.target.value))}
                />
                <button type="submit" className="btn">
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}
