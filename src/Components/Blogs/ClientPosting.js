import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  createStyles,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
} from "@material-ui/core";
import { MoreVert, Sort } from "@material-ui/icons";
import { useSelector } from "react-redux";

const ClientPosting = () => {
  const classes = useStyles();
  const aply =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Cards/Edit.svg";
  const sort =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Cards/Sort.svg";
  const mail =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Cards/Message_alt.svg";
  const ClintPost = useSelector(
    (state) => state.userProfileDetails.details.client_postings
  );
  const userDetails = useSelector((state) => state.userProfileDetails.details);

  const [jobDiscription, setJobDiscription] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {ClintPost?.map((item) => {
        return (
          <>
            <Paper elevation={2} className={classes.paper_box}>
              <Box className={classes.avatar_box}>
                <Avatar className={classes.avatar}>
                  {" "}
                  <img
                    src={userDetails.basic.image_hd}
                    className={classes.img}
                  />{" "}
                </Avatar>
                <Box>
                  <Typography style={{ fontWeight: "bold" }}>
                    {userDetails.basic.name}
                  </Typography>
                  <Typography>@{userDetails.basic.username}</Typography>
                </Box>
                <Button> {<MoreVert />} </Button>
              </Box>

              <Box className={classes.postInfo}>
                <Typography variant="h4" className={classes.post}>
                  Posting
                </Typography>
                <Typography variant="h5" className={classes.post_status}>
                  {item.is_active == true ? "open" : "close"}
                </Typography>
              </Box>

              <Box className={classes.main_content}>
                <Box>
                  <Typography className={classes.heading}>
                    {" "}
                    <b /> looking for
                  </Typography>
                  <Typography>{item.profession}</Typography>
                  <Typography className={classes.heading}>
                    experience
                  </Typography>
                  <Typography>1 years</Typography>
                </Box>
                <Box>
                  <Typography className={classes.heading}>location</Typography>
                  <Typography>{item.location}</Typography>
                  <Typography className={classes.heading}>skills</Typography>
                  {item.skills !== null &&
                    item.skills
                      .split(",")
                      .map(
                        (item, index) =>
                          index < 2 && <Typography>{item}</Typography>
                      )}
                </Box>
              </Box>
              <Box>
                {showDetails && (
                  <Box padding="14px">
                    <Typography>{item.description}</Typography>
                    <hr />
                    <Box>
                      <Typography>
                        {" "}
                        <span className={classes.span_tag}> experience </span>
                        {item.experience} year(s)
                      </Typography>
                      <hr />
                      <Typography>
                        {" "}
                        <span className={classes.span_tag}>job type </span>{" "}
                        {item.job_type}{" "}
                      </Typography>
                      <hr />

                      <Typography>
                        {" "}
                        <span className={classes.span_tag}>openings </span>{" "}
                        {item.openings}{" "}
                      </Typography>
                      <hr />

                      <Typography>
                        {" "}
                        <span className={classes.span_tag}>
                          time period{" "}
                        </span>{" "}
                        {item.time_period}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>

              <Box className={classes.btn_box}>
                <Button onClick={() => setShowDetails(!showDetails)}>
                  <img src={sort} /> Details
                </Button>
                <Button>
                  <img src={aply} /> apply
                </Button>
                <Button>
                  <img src={mail} /> ping
                </Button>
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
      backgroundColor: "#FFF9F9",
      marginTop: "7%",
      borderRadius: "25px",
      boxShadow: "0px 4px 18px 2px rgb(0 0 0 / 13%)",
      width: "79%",
      marginLeft: "17%",
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
      flexDirection: "row",
      justifyContent: "space-around",
      marginRight: "15%",
    },
    btn_box: {
      display: "flex",
      justifyContent: "space-evenly",
      marginBottom: "2%",
      marginTop: "2%",
    },
    jobDetail: {
      padding: "5",
      transitionDuration: "1s",
      transitionTimingFunction: "ease-in-out",
      // webkitTransition: 'all 0.5s ease-in-out',
      // mozTransition: 'all 0.5s ease-in-out',
      // msTransition: 'all 0.9s ease-in-out',
      // transition: 'all 0.5s ease-in-out',
    },
    img: {
      width: "46px",
      height: "47px",
    },
    avatar: {
      width: "50px",
      height: "50px",
    },
    heading: {
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    post: {
      color: "#EDA313",
      fontWeight: "bolder",
      textTransform: "capitalize",
    },
    post_status: {
      borderRadius: "20px",
      width: "27%",
      backgroundColor: "#198754",
      height: "27%",
      textAlign: "center",
      marginTop: "4PX",
      color: "#fff",
    },
    details: {
      backgroundColor: "#fff9f9",
    },
    span_tag: {
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  })
);

export default ClientPosting;
