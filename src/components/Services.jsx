import { Accordion, ChevronIcon } from "@mantine/core";
import React from "react";
import { ChevronDown, EaseInControlPoint } from "tabler-icons-react";

const Services = () => {
  return (
    <section className="services w-full min-h-full flex justify-center items-center">
      <div className="w-full h-full text-white ">
        <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
          Services
        </h6>
        <h3 className="ml-2 text-[37px] tracking-tighter mb-5">
          What I can do.
        </h3>
        <hr className="w-8 mb-5" />
        <p className="mb-10 text-[#7c7c7c] tracking-tighter">
          I create custom web and web app designs for different types of
          businesses. My goal is to make attractive interfaces that meet client
          requirements and help their businesses thrive.
        </p>
        <div className="w-full flex flex-col gap-10">
          <Accordion
            chevron={
              <ChevronDown size="1.5rem" strokeWidth={1} color="#7c7c7c" />
            }
            classNames={{
              label: " text-[25px] text-white font-thin",
              control: "p-0 hover:bg-transparent",
              chevron: "text-white w-auto  ",
              content: "px-0 pb-10 text-[#7c7c7c] text-[22px] font-thin",
            }}
          >
            <Accordion.Item value="customization">
              <Accordion.Control>Customization</Accordion.Control>
              <Accordion.Panel>
                As a junior React developer, I am skilled in customizing web
                designs by creating components, styling with CSS, and
                implementing interactivity using frontend development tools.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="responsive-designs">
              <Accordion.Control>Responsive Designs</Accordion.Control>
              <Accordion.Panel>
                I'm proficient in creating responsive web designs that adapt
                well to different devices, showcasing my frontend development
                skills.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="enhanced-usability">
              <Accordion.Control>Enhanced Usability</Accordion.Control>
              <Accordion.Panel>
                My backend knowledge adds practical and functional designs to
                projects, improving real-world usability in development.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="maintenance">
              <Accordion.Control>Maintenance</Accordion.Control>
              <Accordion.Panel>
                I can provide continuous maintenance, ensuring smooth updates
                and incorporating advanced features as the software progresses
                from one version to another.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
