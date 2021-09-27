import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import figureOne from "../../assets/images/display.png";

import BasicTimeline from "../Timeline/BasicTimeline";
import CustomTimeline from "../Timeline/CustomTimeline";
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Muhammad Wahyu</Typography>
        <Typography className="title">Title</Typography>
      </div>
      <figure className="profile_image">
        <img src={figureOne} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline/>
         <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
