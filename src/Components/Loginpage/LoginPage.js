import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  createStyles,
  makeStyles,
  CircularProgress,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../UserProfile/Action";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userNumber, setUserNumber] = useState("");
  const [snackbarStatus, setSnackbarStatus] = useState(false);
  const [authenticationStatus, setAuthenticationStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    if (userNumber !== "") {
      dispatch(userDetails());

      history("/userprofile/chiragbalani");
      setLoading(false);
    } else {
      setSnackbarStatus(true);
      setAuthenticationStatus("please enter your number first");
    }
  };

  return (
    <>
      <Box className={classes.main_box}>
        <Typography variant="h4" className={classes.top_head}>
          welcome to crewbella
        </Typography>
        <Paper elevation={3} className={classes.paper_box}>
          <TextField
            label="Enter the mobile number"
            type="number"
            onChange={(e) => setUserNumber(e.target.value)}
          />
          <Button onClick={handleLogin} className={classes.btn}>
            {loading ? <CircularProgress size={20} /> : "login"}
          </Button>
        </Paper>
      </Box>

      <Snackbar
        message={authenticationStatus}
        open={snackbarStatus}
        autoHideDuration={5000}
        onClose={() => setSnackbarStatus(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    main_box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    top_head: {
      marginTop: "2%",
      // fontFamily:""
      //   fontFamily: "Assistant, sans-serif",
      //   fontFamily: 'Poppins, sans-serif',
      fontFamily: "Roboto, sans-serif",
      //   fontFamily: "Rock 3D, cursive",
      textTransform: "capitalize",
    },
    paper_box: {
      display: "flex",
      flexDirection: "column",
      width: "25%",
      padding: "2%",
      backgroundColor: "#FFF9F9",
      marginTop: "7%",
    },
    btn: {
      marginTop: "7%",
      backgroundColor: "#C50707",
      color: "#fff;",

      "&:hover": {
        backgroundColor: "#C50707",
        color: "#fff;",
      },
    },
  })
);

export default LoginPage;
