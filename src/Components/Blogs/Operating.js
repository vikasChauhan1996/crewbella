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

const Operating = () => {
  const classes = useStyles();
  const userDetails = useSelector((state) => state.userProfileDetails.details);
  const workPlace = useSelector((state)=>state.userProfileDetails.details.locations)

  const randomImg =
    "https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/user/post/profession.svg";
  return (
    <>
{workPlace.map((items)=>{
  return(
    <>
 
      <Paper elevation={2} className={classes.paper_box}>
        <Box className={classes.postInfo}>
          <Avatar className={classes.avatar} > <img className={classes.img} src={userDetails.basic.image_hd}  alt="" srcset="" /> </Avatar>
          <Box className={classes.main_content}>
            <Typography variant="subtitle2" style={{fontWeight:'bold'}} >{userDetails.basic.name} </Typography>
            <Typography variant="caption">{userDetails.basic.username} </Typography>
          </Box>
          <Button> {<MoreVert />} </Button>
        </Box>

        <Box className={classes.post_box}>
          <img src={randomImg} className={classes.img} />

          <Box className={classes.span_typo} >
            <Typography variant="h5">now available for work in <span className={classes.span_msg} > {items.city} {items.zip_code} {items.state} {items.country}   </span></Typography>
            
          </Box>
        </Box>
      </Paper>
      </>
  )
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
      marginRight: "0%",
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
      marginRight: '3%',
      marginLeft: '12%',
      marginTop: '8%',
    },
    post_box: {
      display: "flex",
      marginTop: "5%",
      marginBottom: "14%",
      marginLeft:"7%"
    },
    profession: {
      marginTop: "3%",
      marginLeft: "8%",
      color: "#EDA313",
      fontSize: "29px",
      fontWeight: "800",
    },
    img:{
      width:"46px",
      height:"47px"
    },
    avatar:{
      width:"50px",
      height:"50px"

    },
    span_msg:{
      fontWeight:"bolder"
    },
    span_typo:{
marginLeft:"12%"
    }
  })
);

export default Operating;
