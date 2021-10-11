import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import figureOne from "../../assets/images/display.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/CustomTimeline";
import resumeData from "../../utils/resumeData";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/CustomButton";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={figureOne} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className="button_container">
          <CustomButton
            text={"Download CV"}
            icon={<GetAppIcon />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
