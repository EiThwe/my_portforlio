import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Icon } from "@iconify/react";

import Input from "./Input";
import Textarea from "./TextArea";
import { Waypoint } from "react-waypoint";

const Contact = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("Contact")}>
      <section
        id="contact"
        className="w-full min-h-full flex md:py-10 pt-20 pb-14 sm:pb-20  items-center"
      >
        <div className="w-full  text-white ">
          <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
            Contact
          </h6>
          <h3 className="ml-2 sm:text-[37px] text-[26px] tracking-tighter mb-5 font-[400]">
            Let's get in touch
          </h3>
          <hr className="w-8 mb-5" />
          <p className="sm:text-base text-sm text-[#7C7C7C]">
            Fill out my form below and send me an email.
          </p>

          <div className="flex flex-col mt-10 gap-5">
            <Input withAsterisk placeholder="Name" />
            <Input withAsterisk placeholder="Email" />
            <Input placeholder="Phone" />
            <Textarea withAsterisk placeholder="Message" />

            <div className="flex justify-between flex-row-reverse items-center mt-3">
              <button
                className=" h-[50px] w-[100px] bg-[#2d2d2d]  backdrop-blur-[50px] bg-opacity-10  z-1 rounded-xl
        flex items-center justify-center gap-3 shadow-inner	flex-row-reverse
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20 z-10"
              >
                <h6 className="text-white text-base font-[400]">Send</h6>
                <Icon icon="tabler:send" color="#f5f5f5" width={18} />
              </button>

              {/* <button className="flex items-center gap-4 flex-row-reverse">

                <div className="border border-white w-[38px] h-[38px] rounded-full flex justify-center items-center">
                  <Icon icon="akar-icons:send" color="white" width={16} />
                </div>
              </button> */}

              <p className="text-[13px] text-[#7C7C7C] sm:block hidden">
                * Marked fields are required to fill.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export default Contact;
