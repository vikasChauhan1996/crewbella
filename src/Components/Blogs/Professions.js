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
import { useSelector } from "react-redux";

const Professions = () => {
  const classes = useStyles();
  const userProfession = useSelector(
    (state) => state.userProfileDetails.details.professions
  );
  const userDetails = useSelector((state) => state.userProfileDetails.details);

  const randomImg =
    "	https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/user/post/profession.svg";
  return (
    <>
      {userProfession?.map((item) => {
        return (
          <>
            <Paper elevation={2} className={classes.paper_box}>
              <Box className={classes.postInfo}>
                <Avatar className={classes.avatar}>
                  <img
                    src={userDetails.basic.image_hd}
                    className={classes.avatarimg}
                    alt=""
                    srcset=""
                  />
                </Avatar>
                <Box className={classes.main_content}>
                  <Typography variant="subtitle2">
                    {userDetails.basic.name}
                  </Typography>
                  <Typography variant="caption">
                    {userDetails.basic.username}
                  </Typography>
                </Box>
                <Button> {<MoreVert />} </Button>
              </Box>
              <Box>
                <Typography variant="h5" className={classes.profession}>
                  {item.quickbook_details !== null &&
                  item.quickbook_details.is_active == true
                    ? "Quickbooks"
                    : "Profession"}
                </Typography>
              </Box>
              <Box className={classes.post_box}>
                <img src={randomImg} className={classes.img} />

                <Box>
                  <Typography variant="">{item.title}</Typography>
                  <Typography variant="subtitle1">
                    rate :
                    {item.quickbook_details !== null
                      ? item.quickbook_details.rate_currency +
                        " " +
                        item.quickbook_details.rate_amount +  +
                        " " +
                        item.quickbook_details.rate_duration
                      : "N / A"}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </>
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

    postInfo: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "6%",
    },
    main_content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      marginRight: "15%",
    },
    img: {
      width: "48px",
      height: "48px",
    },
    post_box: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "5%",
      marginBottom: "14%",
    },
    profession: {
      marginTop: "3%",
      marginLeft: "8%",
      color: "#EDA313",
      fontSize: "29px",
      fontWeight: "800",
    },
    avatarimg:{
      width:"46px",
      height:"47px"
    },
    avatar:{
      width:"50px",
      height:"50px"

    },
  })
);

export default Professions;
