import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import "./Timeline.css";
import { Typography } from "@material-ui/core";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Item Header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
            {icon}
          </TimelineDot>
          {/* Untuk Tanda Lingkaran */}
          <TimelineConnector /> {/* Untuk Garis kebawah */}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
        {/* Untuk Isi */}
      </TimelineItem>


      {/* Item Remaining */}
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"}className={"timeline_dot"} />
    <TimelineConnector/>
  </TimelineSeparator>
);

export default CustomTimeline;
