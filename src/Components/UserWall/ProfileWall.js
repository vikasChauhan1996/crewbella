import React, { useEffect } from "react";
import {
  Box,
  makeStyles,
  createStyles,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import UsersBlogs from "../Blogs/UsersBlogs";
import Navbar from "../UserProfile/Navbar";
import UserProfileDetails from "../UserProfile/UserProfileDetails";
import ClientPosting from "../Blogs/ClientPosting";
import Portfolio from "../Blogs/Portfolio";
import Professions from "../Blogs/Professions";
import Operating from "../Blogs/Operating";
import Interactions from "../Blogs/Interactions";
import Events from "../EventsSection/Events";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../UserProfile/Action";

const ProfileWall = () => {
  const classes = useStyles();
  const details = useSelector((state) => state.userProfileDetails.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(details).length === 0) {
      dispatch(userDetails("chiragbalani"));
    }
  }, [details]);
  return (
    <Box className={classes.main_Box}>
      <Navbar />
      {Object.keys(details).length ? (
        <Box mt="70px">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <UserProfileDetails />
            </Grid>
            <Grid item sm={4}>
              <UsersBlogs />
            </Grid>
            <Grid item sm={4}>
              <Events />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box marginTop={"10%"} display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    main_Box: {
      //   display:"flex",
      //   flexDirection:"row"
    },
    tab: {
      marginTop: "10%",
      marginLeft: "5%",
    },
  })
);

export default ProfileWall;
