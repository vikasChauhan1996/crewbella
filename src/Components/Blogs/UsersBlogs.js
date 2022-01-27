import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  makeStyles,
  createStyles,
  Tabpa,
} from "@material-ui/core";
import Portfolio from "./Portfolio";
import ClientPosting from "./ClientPosting";
import Professions from "./Professions";
import Operating from "./Operating";
import Interactions from "./Interactions";

const UsersBlogs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  useEffect(() => {
    console.log("tab", value);
  }, [value]);
  return (
    <div style={{ height:'100vh', overflowY: "scroll" }}>
      <Box sx={{ maxWidth: 450 }}>
        <Box className={classes.tab_box} > 
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            className={classes.tabbar}
          >
            {/* <Tab className={classes.tabs} value={0} label="Top" /> */}
            <Tab className={classes.tabs} value={0} label="Portfolio" />
            <Tab className={classes.tabs} value={1} label="Client Postings" />
            <Tab className={classes.tabs} value={2} label="Professions" />
            <Tab className={classes.tabs} value={3} label="Operating in" />
            <Tab className={classes.tabs} value={4} label="interactions" />
          </Tabs>
        </Box>

        <Box >
          {value == 0 ? (
            <Box>
              <Portfolio />
            </Box>
          ) : value == 1 ? (
            <Box>
              <ClientPosting />
            </Box>
          ) : value == 2 ? (
            <Box>
              <Professions />
            </Box>
          ) : value == 3 ? (
            <Box>
              <Operating />
            </Box>
          ) : (
            <Interactions />
          )}
        </Box>
      </Box>
    </div>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    tabs: {
      color: "#212529",
      width: "50px",
      textTransform: "capitalize",
      color: "#212529",
      fontWeight: "bold ",
      backgroundPosition: "fixed",
      "&:hover": {
        border: "1px solid red",
        borderRadius: "50px",
        height: "40px",
        color: "#C50707",
      },
    },
    tab_box:{
      // position:"fixed"
      // marginBottom: '0px',
      // position: 'fixed',
      // width: '29%',
      backgroundColor: '#fff',
    }
  })
);

export default UsersBlogs;
