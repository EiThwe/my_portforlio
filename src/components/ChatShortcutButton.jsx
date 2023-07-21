import { Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  ArrowsMinimize,
  BrandMessenger,
  BrandTelegram,
  X,
} from "tabler-icons-react";

const ChatShortcutButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[250px] h-[250px] fixed -bottom-[88px] -right-[88px]">
      <div className="w-full h-full relative flex justify-center items-center">
        {show ? (
          <button
            onClick={() => setShow(!show)}
            className="chat-shortcut w-14 h-14 z-10 rounded-full bg-primary backdrop-blur-[10px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <X size={30} className="text-white" />
          </button>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="chat-shortcut w-14 h-14 z-10 rounded-full border border-white border-opacity-30 bg-primary backdrop-blur-[10px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
          >
            <HiOutlineChatBubbleOvalLeftEllipsis
              size={30}
              className="text-primary"
            />
          </button>
        )}

        <div
          className={`absolute w-full h-full border-[1px] border-white border-opacity-10 shadow-inner shadow-[#6b6b6b] bg-primary bg-opacity-20 backdrop-blur-[13px]  rounded-full z-[1] ${
            show ? "scale-100" : "scale-0"
          } transition-all duration-300 ease-in-out`}
        >
          <Tooltip
            withArrow
            label="telegram"
            arrowSize={10}
            offset={5}
            arrowRadius={0}
            classNames={{
              tooltip:
                " bg-black backdrop-blur-[3px] bg-opacity-90 rounded-md shadow-inner shadow-[#6b6b6b] border border-gray-500 border-opacity-20 ",
            }}
          >
            <Link
              to={"https://t.me/eT2919"}
              target="_blank"
              className="chat-telegram absolute top-[115px] left-[10px] w-11 h-11 z-10 rounded-full border-2 border-opacity-30 border-white bg-primary backdrop-blur-[20px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
            >
              <BrandTelegram
                size={25}
                strokeWidth={1.2}
                className="text-white"
              />
            </Link>
          </Tooltip>
          <Tooltip
            arrowSize={10}
            offset={5}
            arrowRadius={0}
            withArrow
            label="messenger"
            classNames={{
              tooltip:
                " bg-black backdrop-blur-[3px] bg-opacity-90 rounded-md shadow-inner shadow-[#6b6b6b] border border-gray-500 border-opacity-20 ",
            }}
          >
            <Link
              to={"https://m.me/100008563840418"}
              className="chat-messenger absolute top-[40px] left-[40px] w-11 h-11 z-10 rounded-full border-2 border-opacity-30 border-white bg-primary backdrop-blur-[20px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
            >
              <BrandMessenger
                size={25}
                strokeWidth={1.2}
                className="text-white"
              />
            </Link>
          </Tooltip>
          <Tooltip
            arrowSize={10}
            offset={5}
            arrowRadius={0}
            withArrow
            label="contact form"
            classNames={{
              tooltip:
                " bg-black backdrop-blur-[3px] bg-opacity-90 rounded-md shadow-inner shadow-[#6b6b6b] border border-gray-500 border-opacity-20 ",
            }}
          >
            <Link
              to={""}
              onClick={() => setShow(!show)}
              className="own-chat absolute top-[10px] left-[115px] w-11 h-11 z-10 rounded-full border-2 border-opacity-30 border-white bg-primary backdrop-blur-[20px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner"
            >
              <HiOutlineChatBubbleOvalLeftEllipsis
                size={25}
                strokeWidth={1.2}
                className="text-white"
              />
            </Link>
          </Tooltip>
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
