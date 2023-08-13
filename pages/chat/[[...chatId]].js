import Head from "next/head";
import { ChatSideBar } from "../../components/ChatSideBar";

export default function ChatPage() {
  return (
    <>
      <Head>Start A Chat</Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSideBar />
        <div className="flex flex-col bg-gray-700">
          <div className="flex-1"> chat window</div>
          <footer className="bg-gray-800 p-10">
            <form>
              <fieldset className="flex gap-2">
                <textarea
                  className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-red-500 focus:bg-gray-600 focus:outline focus:outline-red-500"
                  placeholder="Strike up a conversation..."
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
