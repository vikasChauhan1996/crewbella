import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  createStyles,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const Events = () => {
  const classes = useStyles();
  const eventsPost = useSelector(
    (state) => state.userProfileDetails.details.events
  );
  return (
    <>
      <Box>
        {eventsPost?.map((item, index) => {
          return (
            <Box key={index}>
              <Typography variant="h5" className={classes.head}>
                Events
              </Typography>
              <img
                src={item.thumbnail}
                alt={item.theme}
                className={classes.img}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    head: {
      borderBottom: "1px solid #dee2e6",
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    img: {
      width: "135px",
      height: "180px",
      marginTop: "5%",
      borderRadius: "5px",
    },
  })
);

export default Events;
