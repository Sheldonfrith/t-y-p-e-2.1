//material ui
import { unstable_createMuiStrictModeTheme,AppBar, Tab, Tabs } from "@material-ui/core";
import {Box} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//redux
import {selectIsLoggedIn} from '../../global/slices/IsLoggedIn';
import { useSelector, useDispatch } from 'react-redux';


// react
import React from 'react';
import PropTypes from 'prop-types';

// my components
import TrainingArea from '../views/training-area/TrainingArea';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
            {/* {children} */}
          </Box>
        )}
      </div>
    );
  }
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function BodyNavBar() {
    const loggedInState = useSelector(selectIsLoggedIn);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    //two different returns based on if currently logged in
    const loggedInLabels = [
        "Training Area",
        "Customize Training Modes",
        "View Statistics",
        "Manage Account",
    ]
    const notLoggedInLabels = [
        "Training Demo",
        "Login",
        "Create Account",
    ]
    const currentLabels = loggedInState? loggedInLabels : notLoggedInLabels;
    //views
    const loggedInViews = [
        <TrainingArea/>,
        // <CustomizeTrainingModes/>,
        // <ViewStatistics/>,
        // <ManageAccount/>,
    ]
    const notLoggedInViews = [
        // <TrainingDemo/>,
        // <Login/>,
        // <CreateAccount/>,
    ]
    const currentViews = loggedInState? loggedInViews: notLoggedInViews;
    
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="view tabs">
                {currentLabels.map((label,index) => <Tab label={label} key={'tablabel'+index} {...a11yProps(index)}/>)}
            </Tabs>
        </AppBar>
        {currentViews.map((view,index) => (
        <TabPanel value={value} index={index} key={'tabPanel'+index}>
            {view}
        </TabPanel>
        ))}
        </div>
    );
    }