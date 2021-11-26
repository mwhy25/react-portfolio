import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <div>
      <div className="backimage">
        <div className="glass-effect ">
          <Typography className="pb_45 " variant="h3" align="center">
            Contact Info
          </Typography>
          <Typography className="hero-subs" variant="body2" align="center">
            Sample Text
          </Typography>
          <Grid
            container
            spacing={8}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item alignItems="center">
              <Typography variant="h5" align="center">
                <LocationOnIcon fontSize="large" />
              </Typography>
              <Typography variant="body2" align="center">
                Address
              </Typography>
              <Typography variant="body2" align="center">
                Disini
              </Typography>
            </Grid>
            <Grid item alignItems="center">
              <Typography variant="h5" align="center">
                <LocalPhoneIcon fontSize="large" />
              </Typography>
              <Typography variant="body2" align="center">
                Phone
              </Typography>
              <Typography variant="body2" align="center">
                Disini
              </Typography>
            </Grid>
            <Grid item alignItems="center">
              <Typography variant="h5" align="center">
                <EmailIcon fontSize="large" />
              </Typography>
              <Typography variant="body2" align="center">
                Email
              </Typography>
              <Typography variant="body2" align="center">
                Disini
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Contact;
