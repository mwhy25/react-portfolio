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
import WorkIcon from "@mui/icons-material/Work";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Item Header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
            {icon}
            {/* <WorkIcon /> */}
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

      {children}

      {/* Item Remaining */}
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Tes 2</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"}className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
