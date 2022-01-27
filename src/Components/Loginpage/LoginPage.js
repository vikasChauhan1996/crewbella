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

import Autocomplete from "@material-ui/lab/Autocomplete";

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [snackbarStatus, setSnackbarStatus] = useState(false);
  const [authenticationStatus, setAuthenticationStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    if (user !== "") {
      dispatch(userDetails(user));

      history("/userprofile/chiragbalani");
      setLoading(false);
    } else {
      setSnackbarStatus(true);
      setLoading(false);
      setAuthenticationStatus("please select user");
    }
  };

  return (
    <>
      <Box className={classes.main_box}>
        <Typography variant="h4" className={classes.top_head}>
          welcome to crewbella
        </Typography>
        <Paper elevation={3} className={classes.paper_box}>
          {/* <TextField
            label="Enter the mobile number"
            type="number"
            onChange={(e) => setUserNumber(e.target.value)}
          /> */}
          <Autocomplete
            onChange={(event, value) => setUser(value.id)}
            options={[{ name: "Chirag Balani", id: "chiragbalani" }]}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Type name" variant="outlined" />
            )}
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
