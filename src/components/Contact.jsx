import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Icon } from "@iconify/react";

import Input from "./Input";
import Textarea from "./TextArea";
import { Waypoint } from "react-waypoint";

const Contact = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("Contact")}>
      <section id="contact" className="w-full min-h-full flex  items-center">
        <div className="w-full  text-white ">
          <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
            Contact
          </h6>
          <h3 className="ml-2 text-[35px] tracking-tighter mb-5 font-[400]">
            Let's get in touch.
          </h3>
          <hr className="w-8 mb-5" />
          <p className="text-base text-[#7C7C7C]">
            Fill out my form below and send me an email.
          </p>

          <div className="flex flex-col mt-10 gap-5">
            <Input withAsterisk placeholder="Name" />
            <Input withAsterisk placeholder="Email" />
            <Input placeholder="Phone" />
            <Textarea withAsterisk placeholder="Message" />

            <div className="flex justify-between items-center mt-3">
              <button className="flex items-center gap-4 ">
                <h6 className="text-white text-xl font-[300]">Send</h6>
                <div className="border border-white w-[38px] h-[38px] rounded-full flex justify-center items-center">
                  <Icon icon="akar-icons:send" color="white" width={16} />
                </div>
              </button>

              <p className="text-[10px] text-[#7C7C7C]">
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
