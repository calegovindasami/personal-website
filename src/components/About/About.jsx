import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import "./About.css";
export const About = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h3" sx={{ textAlign: "left" }}>
        Hello!
      </Typography>

      <Typography paragraph textAlign="left">
        My name is Cale Govindasami, and I am currently pursuing a Bachelor's
        Degree in Computer and Information Sciences with a specialization in
        Application Development. As a third-year student, I am committed to
        expanding my knowledge and skills in this exciting field{" "}
        <a href="https://www.varsitycollege.co.za/">@Varsity College</a>.
      </Typography>

      <Typography paragraph textAlign="left">
        From an early age, I have been fascinated by the world of computers. It
        is a passion that has led me to pursue my studies at an institution
        where I have the freedom to explore a wide range of technologies and
        programming languages. In terms of my expertise, I am particularly
        proficient in:
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Tooltip title="C#">
          <IconButton disableRipple="true" className="icBtn">
            <Avatar sx={{ width: 64, height: 64 }} src="/csharp.svg" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Kotlin">
          <IconButton disableRipple="true" className="icBtn">
            <Avatar
              sx={{ width: 64, height: 64 }}
              variant="square"
              src="/kotlin.svg"
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="SQL">
          <IconButton disableRipple="true" className="icBtn">
            <Avatar sx={{ width: 64, height: 64 }} src="/sql.png" />
          </IconButton>
        </Tooltip>

        <Tooltip title="JavaScript">
          <IconButton disableRipple="true" className="icBtn">
            <Avatar
              sx={{ width: 64, height: 64 }}
              variant="square"
              src="/js.svg"
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Java">
          <IconButton disableRipple="true" className="icBtn">
            <Avatar
              sx={{ width: 64, height: 64 }}
              variant="circular"
              src="/java.svg"
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Typography paragraph textAlign="left">
        In addition to the aforementioned technologies, I have experience with
        WebAPIs, React, PL/SQL, and Azure. When I'm not studying or working, I
        enjoy playing video games with my friends, experimenting with new
        frameworks and technologies, and spending quality time with my feline
        companion
      </Typography>

      <Typography paragraph textAlign="left">
        Should you have any further inquiries about me, please do not hesitate
        to reach out to me via email at <a>calegovindasami@gmail.com</a>. I am
        excited to hear from you soon!
      </Typography>

      <Typography paragraph textAlign="left" fontWeight="bolder">
        Have a great day!
      </Typography>
    </Stack>
  );
};
