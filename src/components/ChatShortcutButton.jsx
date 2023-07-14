import React, { useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ArrowsMinimize, BrandMessenger, BrandTelegram, X } from "tabler-icons-react";

const ChatShortcutButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[300px] h-[300px] fixed -bottom-[70px] -right-[70px]">
      <div className="w-full h-full relative flex justify-center items-center">
        {show ? (
          <button
            onClick={() => setShow(!show)}
            className="chat-shortcut w-14 h-14 z-10 rounded-full bg-white backdrop-blur-[10px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <X size={30} className="text-white" />
          </button>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="chat-shortcut w-14 h-14 z-10 rounded-full bg-white backdrop-blur-[10px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <HiOutlineChatBubbleOvalLeftEllipsis
              size={30}
              className="text-white"
            />
          </button>
        )}

        <div
          className={`absolute w-full h-full bg-[#6C6C6C] bg-opacity-20 backdrop-blur-[3px]  rounded-full z-[1] ${
            show ? "scale-100" : "scale-0"
          } transition-all duration-300 ease-in-out`}
        >
          <Link
            to={"https://t.me/eT2919"}
            target="_blank"
            className="chat-shortcut absolute top-[120px] left-[10px] w-11 h-11 z-10 rounded-full bg-white backdrop-blur-[20px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <BrandTelegram size={25} strokeWidth={1.2} className="text-white" />
          </Link>
          <Link
            to={"https://m.me/100008563840418"}
            className="chat-shortcut absolute top-[40px] left-[40px] w-11 h-11 z-10 rounded-full bg-white backdrop-blur-[20px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <BrandMessenger
              size={25}
              strokeWidth={1.2}
              className="text-white"
            />
          </Link>
          <Link
            to={""}
            onClick={() => setShow(!show)}
            className="chat-shortcut absolute top-[10px] left-[120px] w-11 h-11 z-10 rounded-full bg-white backdrop-blur-[20px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <HiOutlineChatBubbleOvalLeftEllipsis
              size={25}
              strokeWidth={1.2}
              className="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatShortcutButton;

{
  /* <button className="chat-shortcut fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white backdrop-blur-[10px] bg-opacity-20 flex justify-center items-center shadow-[#6b6b6b] shadow-inner">
        <HiOutlineChatBubbleOvalLeftEllipsis size={30} className="text-white" />
      </button> */
}
