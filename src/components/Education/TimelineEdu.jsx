import React from "react";
import { Timeline, TimelineItem } from "@mui/lab";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const TimelineEdu = () => {
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <span className="text-[#c90076] p-0 m-0 ">
              Electronics and Communication Engineering
            </span>{" "}
            <br />{" "}
            <span className="text-sm font-light text-gray-300 ">
              Myanmar Insitute of Information Technology(MIIT)
            </span>{" "}
            <br />
            <span className="text-xs text-gray-500">Since 2017</span>{" "}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent >
          <span className="text-[#c90076] p-0 m-0 ">
              Web development
            </span><br />
            <span className="text-sm font-light text-gray-300 ">
              MMS IT
            </span><br />
            <span className="text-xs text-gray-500">Since 2022 (early)</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent >
          <span className="text-[#c90076] p-0 m-0 ">
             UI/UX
            </span><br />
            <span className="text-sm font-light text-gray-300 ">
             Simbolo
            </span><br />
            <span className="text-xs text-gray-500">Since 2023(early)</span>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent className="text-white" ></TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </>
  );
};

export default TimelineEdu;
