import React, { Fragment, useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  createStyles,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
// import {KeyboardArrowDownIcon} from '@mui/icons-material/KeyboardArrowDown';
import {
  Add,
  FormatColorResetTwoTone,
  KeyboardArrowDown,
  LocationOnOutlined,
  CalendarTodayOutlined,
  CakeOutlined,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";

const UserProfileDetails = () => {
  const classes = useStyles();
  const params = useParams();
  const userDetails = useSelector((state) => state.userProfileDetails.details);
  const [showMore, setShowMore] = useState(false);

  const [expanded, setExpanded] = React.useState(false);
  const [joiningDate, setJoiningDate] = useState("");
  const [dob, setDob] = useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleMount = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Box className={classes.main_div}>
        <Avatar className={classes.imgDiv} src={userDetails.basic.image_hd}>
          {" "}
        </Avatar>
        <Typography variant="h4">chirag bilani</Typography>

        <Box className={classes.userid}>
          <Typography>@{userDetails.basic.username}</Typography>
          <Typography>
            {" "}
            <LocationOnOutlined /> {userDetails.locations[0].city}{" "}
          </Typography>
        </Box>
        <Box className={classes.userid}>
          <Typography>
            {" "}
            <span style={{ fontWeight: "bolder" }}>
              {userDetails.basic.followings}{" "}
            </span>{" "}
            followers
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bolder" }}>
              {" "}
              {userDetails.basic.quick_bookings}{" "}
            </span>{" "}
            QuickBooks
          </Typography>
        </Box>
        <Button className={classes.btn}>see quickbook</Button>

        <Typography style={{ fontWeight: "bold" }}>
          #director #director #filmmaker
        </Typography>

        <Button
          variant="outlined"
          className={classes.moreBtn}
          onClick={handleMount}
          endIcon={<KeyboardArrowDown />}
        >
          know more
        </Button>
        {showMore && (
          <Box className={classes.fregmnt_box}>
            <Box className={classes.join_birt_date}>
              <CalendarTodayOutlined />

              <Typography
                className={classes.join_birt_date}
                variant="subtitle2"
              >
                Joined:
              </Typography>
              <Typography>
                {new Date(userDetails.basic.created_at).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </Typography>
            </Box>
            <Box className={classes.join_birt_date}>
              <CakeOutlined />

              <Typography
                className={classes.join_birt_date}
                variant="subtitle2"
              >
                Date of Birth:
              </Typography>
              <Typography>{userDetails.basic.dob}</Typography>
            </Box>
          </Box>
        )}

        <Box>
          <Button>follow</Button>
          <Button>ping me</Button>
        </Box>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    main_div: {
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "5%",
    },
    imgDiv: {
      width: "45%",
      height: "40%",
      borderRadius: "50%",
      border: "3px solid red",
      boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
    },
    moreBtn: {
      width: "42%",
      borderRadius: "18px",
      height: "6%",
      color: "#6c757d",
    },
    accordiondetails: {
      display: "flex",
      flexDirection: "column",
    },
    btn: {
      backgroundColor: "#C50707",
      color: "#fff",
      borderRadius: "18px",
      width: "78%",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#C50707",
        color: "#fff",
      },
    },
    userid: {
      display: "flex",
      justifyContent: "space-between",
      width: "61%",
      justifyContent: "space-between",
    },
    join_birt_date: {
      display: "flex",
      alignItems: "center",
      marginBottom: "2%",
      marginTop: "2%",
      // paddingLeft:"2%",
      // width:"100%"
    },
    fregmnt_box: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      justifyContent: "space-between",
    },
  })
);

export default UserProfileDetails;
