import React from "react";
import { Box, makeStyles, createStyles, Grid } from "@material-ui/core";
import UsersBlogs from "../Blogs/UsersBlogs";
import Navbar from "../UserProfile/Navbar";
import UserProfileDetails from "../UserProfile/UserProfileDetails";
import ClientPosting from "../Blogs/ClientPosting";
import Portfolio from "../Blogs/Portfolio";
import Professions from "../Blogs/Professions";
import Operating from "../Blogs/Operating";
import Interactions from "../Blogs/Interactions";
import Events from "../EventsSection/Events";

const ProfileWall = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main_Box}>
      <Navbar />
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
    

     
      <Box className={classes.tab}></Box>
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
