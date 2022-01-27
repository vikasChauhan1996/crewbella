import React from "react";
import {
  Box,
  makeStyles,
  createStyles,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { MoreVert, Sort } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { userProfileDetails } from "../UserProfile/Reducer";
const Portfolio = () => {
  const classes = useStyles();
  const userPortfolio = useSelector(
    (state) => state.userProfileDetails.details.portfolio
  );
  const userDetails = useSelector((state) => state.userProfileDetails.details);

  const randomImg =
    "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  return (
    <>
      {userPortfolio.map((item, index) => {
        return (
          <Paper elevation={2} className={classes.paper_box} key={index}>
            <Box className={classes.avatar_box}>
              <img
                className={classes.img}
                src={item.images.map((imageitems) => imageitems.image)}
              />
            </Box>

            <Box className={classes.postInfo}>
              <Avatar className={classes.avatar}>
                <img
                  src={userDetails.basic.image_hd}
                  className={classes.avatarimg}
                />
              </Avatar>
              <Box className={classes.main_content}>
                <Typography variant="subtitle2" className={classes.name}>
                  {userDetails.basic.name}
                </Typography>
                <Typography variant="caption">
                  @{userDetails.basic.username}
                </Typography>
              </Box>
              <Button> {<MoreVert />} </Button>
            </Box>
          </Paper>
        );
      })}
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    paper_box: {
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 4px 18px 2px rgb(0 0 0 / 13%)",
      backgroundColor: "#FFF9F9",
      marginTop: "7%",
      borderRadius: "25px",
      width: "79%",
      marginLeft: "17%",
    },
    img: {
      width: "100%",
      borderRadius: "18px",
      marginBottom: "2%",
    },
    avatar_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "3%",
    },
    postInfo: {
      display: "flex",
      justifyContent: "space-evenly",
      marginRight: "20%",
    },
    main_content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    avatarimg: {
      width: "46px",
      height: "47px",
    },
    avatar: {
      width: "50px",
      height: "50px",
    },
    name: {
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  })
);

export default Portfolio;
