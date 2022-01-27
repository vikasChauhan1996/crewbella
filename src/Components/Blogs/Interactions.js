import React, { useState } from "react";
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
  AccordionSummary,
} from "@material-ui/core";
import { MoreVert, Sort } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Interactions = () => {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);

  const InterActionsDetails = useSelector(
    (state) => state.userProfileDetails.details.questions
  );
  const userDetails = useSelector(
    (state) => state.userProfileDetails.details.basic
  );
  const aply =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Cards/Edit.svg";
  const sort =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Cards/Sort.svg";
  const mail =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Cards/Message_alt.svg";
  const [jobDiscription, setJobDiscription] = useState("");

  return (
    <>
      {InterActionsDetails.map((items) => {
        return (
          <>
            <Paper elevation={2} className={classes.paper_box}>
              <Box className={classes.avatar_box}>
                <Avatar className={classes.avatar}>
                  {" "}
                  <img
                    src={userDetails.image_hd}
                    className={classes.avatarimg}
                  />{" "}
                </Avatar>
                <Box style={{ marginRight: "29%" }}>
                  <Typography style={{ fontWeight: "bold" }}>
                    {userDetails.name}
                  </Typography>
                  <Typography>@{userDetails.username}</Typography>
                </Box>
                <Button> {<MoreVert />} </Button>
              </Box>

              <Box className={classes.postInfo}>
                <Typography variant="h4" className={classes.post}>
                  Question
                </Typography>
                <Typography variant="h6" className={classes.question}>
                  {items.title}
                </Typography>
              </Box>
              <Box>
                {/* <Accordion>
                  <AccordionDetails className={classes.details}> */}
                {showDetails && (
                  <>
                    <Box className={classes.acordian_userimage}>
                      <Avatar className={classes.accordianavatar}>
                        <img
                          src={userDetails.image_hd}
                          className={classes.accordianavatarimg}
                        />
                      </Avatar>
                      <Typography
                        style={{ fontWeight: "bold", marginLeft: "5%" }}
                      >
                        {userDetails.name}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "14%" }}
                      >
                        {" "}
                        {items.answer.description}{" "}
                      </Typography>
                    </Box>
                  </>
                )}
              </Box>

              <Box className={classes.btn_box}>
                <Button onClick={() => setShowDetails(!showDetails)}>
                  {" "}
                  <img src={sort} /> Details
                </Button>
                <Button>
                  {" "}
                  <img src={aply} /> apply
                </Button>
                <Button>
                  {" "}
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
      boxShadow: "0px 4px 18px 2px rgb(0 0 0 / 13%)",
      backgroundColor: "#FFF9F9",
      marginTop: "7%",
      borderRadius: "25px",
      width: "79%",
      marginLeft: "17%",
    },
    avatar_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "3%",
      justifyContent: "space-evenly",
    },
    postInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      marginLeft: "8%",
    },

    btn_box: {
      display: "flex",
      justifyContent: "space-evenly",
    },

    post: {
      color: "#EDA313",
      fontSize: "29px",
      fontWeight: "800",
    },
    // job_paper_box: {
    //   backgroundColor: "aliceblue;",
    // },
    question: {
      fontWeight: "bold",
    },
    avatarimg: {
      width: "46px",
      height: "47px",
    },
    avatar: {
      width: "50px",
      height: "50px",
    },
    accordianavatarimg: {
      width: "30px",
      height: "30px",
    },
    accordianavatar: {
      width: "30px",
      height: "30px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      // textAlign: "start",
      textTransform: "capitalize",
      // color: "#4a4242",
      backgroundColor: "aliceblue",
    },
    acordian_userimage: {
      display: "flex",
      marginLeft: "4%",
      marginTop: "6%",
    },
  })
);

export default Interactions;
