import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustomTimeline";
import WorkIcon from '@mui/icons-material/Work';
const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experiences */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon/>}>
                {resumeData.experience.map('title')}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section"></Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
