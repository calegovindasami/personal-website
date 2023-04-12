import React from "react";

import Button from "@mui/material/Button";
import ArticleIcon from "@mui/icons-material/Article";
import Paper from "@mui/material/Paper";
import { lightBlue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./Bio.css";
import SchoolIcon from "@mui/icons-material/School";
import CelebrationIcon from "@mui/icons-material/Celebration";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar, Divider } from "@mui/material";
export const Bio = () => {
  return (
    <Paper
      id="Paper"
      sx={{
        width: "100%",
        height: "500px",
        display: "block",
        position: "relative",
      }}
    >
      <div id="ThreeD">
        <Divider></Divider>
      </div>
      <Avatar
        sx={{
          height: "150px",
          width: "150px",
        }}
        id="ava"
      >
        <img src="/avatar.jpg" height="150px"></img>
      </Avatar>
      <div id="biography">
        <div id="heading">
          <Typography id="name" component="h4" variant="h4">
            Cale Govindasami
          </Typography>
          <VerifiedIcon fontSize="large" sx={{ color: lightBlue[500] }} />
        </div>

        <div id="desc">
          <Typography paragraph>
            Computer science student aspiring to become a software developer.
            Passionate about coding, problem-solving, and creating innovative
            solutions. Constantly learning and exploring new technologies to
            expand my skillset.
          </Typography>
        </div>
        <div id="tags">
          <div>
            <ArticleIcon fontSize="small" sx={{ color: "GrayText" }} />
            <Typography variant="body1" sx={{ color: "GrayText" }}>
              <a>Download CV</a>
            </Typography>
          </div>
          <div>
            <LinkIcon fontSize="small" sx={{ color: "GrayText" }} />
            <Typography variant="body1" sx={{ color: "GrayText" }}>
              <a>Links</a>
            </Typography>
          </div>

          <div>
            <CelebrationIcon fontSize="small" sx={{ color: "GrayText" }} />
            <Typography variant="body1" sx={{ color: "GrayText" }}>
              6 April 2001
            </Typography>
          </div>

          <div>
            <SchoolIcon fontSize="small" sx={{ color: "GrayText" }} />
            <Typography variant="body1" sx={{ color: "GrayText" }}>
              Graduating 2024
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
};
