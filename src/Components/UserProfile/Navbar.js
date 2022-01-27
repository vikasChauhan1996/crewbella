import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  createStyles,
  makeStyles,
  Box,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import imageList from "./images";
import { userDetails } from "./Action";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const crewbella =
    "	https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/bellacrew-03-03%201.svg";

  const AvatarIcon =
    "		https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/react/Navbar/User_fill.svg";
  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Box className={classes.main_btn_box}>
            <Box>
              <Button>
                <img src={crewbella} className={classes.imgIcon} />
              </Button>
            </Box>

            <Box className={classes.btn_box}>
            {imageList.map((items) => {
              return (
                  <Button>
                    <img src={items.iconImg} className={classes.imgIcon} />
                  </Button>
              );
            })}
                </Box>
            <Box marginLeft='84%' >
              <Button>
                <img src={AvatarIcon} className={classes.imgIcon} />
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    appbar: {
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 4px 18px 2px rgb(0 0 0 / 13%)",
      borderRadius: "0px 0px 24px 24px;",
    },
    imgIcon: {
      height: "37px",
    },
    btn_box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft:"63%",
    },
    main_btn_box: {
      display: "flex",
    },
  })
);
export default Navbar;
