import React from "react";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Tweet.css";
import {
  Avatar,
  CardActionArea,
  CardActions,
  CardHeader,
  IconButton,
} from "@mui/material";

import { useTheme } from "@emotion/react";

function handleTag() {}
export const Tweet = () => {
  return (
    <Card sx={{ width: "800px" }}>
      <CardActionArea sx={{ cursor: "default" }} disableTouchRipple={true}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar>
                    <img src="./avatar.jpg" height="45"></img>
                  </Avatar>
                }
                titleTypographyProps={{
                  fontFamily: "inherit",
                  color: "red[500]",
                  variant: "h6",
                  align: "left",
                }}
                title={<div id="title">Cale</div>}
                subheader={
                  <span>
                    <Chip size="small" label="🖥️ Debugging..." />
                  </span>
                }
              />
            </Box>
            <Typography variant="body1" textAlign="left">
              In 2020, I embarked on my journey in web development through{" "}
              <a href="www.theodinproject.com">The Odin Project</a>. Despite my
              interest in creating a personal website, I never found the
              opportunity to do so. However, as I now search for internships and
              job prospects, I finally decided to take the plunge. Using React
              and MUI, I developed my own website.
            </Typography>
          </CardContent>
        </Box>

        <Box>
          <CardMedia>
            <img src="./react.svg" height={300} />
          </CardMedia>
        </Box>
        <CardActions>
          <Button>
            <FavoriteIcon sx={{ color: red[500] }} />
          </Button>

          <IconButton size="large">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
