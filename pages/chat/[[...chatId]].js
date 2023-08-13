import Head from "next/head";
import {ChatSideBar} from "../../components/ChatSideBar";

export default function ChatId() {
    return (
      <>
      <Head>Start A Chat</Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSideBar />
        <div className="bg-gray-700 flex flex-col">
          <div className="flex-1"> chat window</div>
          <footer className="bg-gray-800 p-10">footer</footer>
        </div>
      </div>
      </>

    );
}
