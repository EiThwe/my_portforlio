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
            <span className="text-sm font-light text-gray-400 ">
              Myanmar Insitute of Information Technology(MIIT)
            </span>{" "}
            <br />
            <span className="text-xs text-gray-500">2017-2020</span>{" "}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-[#c90076] p-0 m-0 ">
              Web Development Foundation
            </span>
            <br />
            <span className="text-sm font-light text-gray-400 ">MMS IT</span>
            <br />
            <span className="text-xs text-gray-500">
              2022 (May) - 2022 (June)
            </span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-[#c90076] p-0 m-0 ">Special Web Design</span>
            <br />
            <span className="text-sm font-light text-gray-400 ">MMS IT</span>
            <br />
            <span className="text-xs text-gray-500">
              2022 (July) - 2023 (July)
            </span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-[#c90076] p-0 m-0 ">
              Web Application Development
            </span>
            <br />
            <span className="text-sm font-light text-gray-400 ">MMS IT</span>
            <br />
            <span className="text-xs text-gray-500">
              {" "}
              2022(December) - 2023 (September)
            </span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-[#c90076] p-0 m-0 ">
              Liberal Arts Program
            </span>
            <br />
            <span className="text-sm font-light text-gray-400 ">MIT</span>
            <br />
            <span className="text-xs text-gray-500">
              2023(October)- Present
            </span>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimelineEdu;
