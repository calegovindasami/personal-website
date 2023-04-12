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
                    <img src="/avatar.jpg" height="45"></img>
                  </Avatar>
                }
                titleTypographyProps={{
                  fontFamily: "inherit",
                  color: "red[500]",
                  variant: "h6",
                  align: "left",
                }}
                title={<div id="title">Cale</div>}
                subheader={<Chip size="small" label="📚 Exams loading. . ." />}
              />
            </Box>
            <Typography variant="body1" textAlign="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor
              animi, esse ex expedita distinctio alias perferendis maxime natus
              consequuntur. Quidem harum perspiciatis temporibus omnis aut
              nostrum unde magni alias.
            </Typography>
          </CardContent>
        </Box>

        <Box>
          <CardMedia component="img" height="300" image="/demo.png" />
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
